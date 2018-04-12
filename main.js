var benefit;

$(document).ready(function () {

	$("#form1").on("change", function () {
		var comm = $(this);//this is the dropdown.
		// console.log(comm);
		benefit = comm.find(':selected').val();//this is the 3000
		var default_rent = comm.find(":selected").data("rent");//gets the rent
		//console.log(benefit);
		$(".money").val(benefit);//in this case $3000-or the initial SS for the neighborhood
		$("#rent").find("input").val(default_rent);//when you select change it sets the default rent

		$(".expense input").each(function () {
			if($(this).attr("id") != "rentinput"){//it will only loop over the inputs. except for the rentinput.
				$(this).val("");//then it will reset the value to nothing, "".
			}
		});


		//setTimeout(function () {
			$("#rent").find("input").trigger("change");
		//}, 1000); commneted out the firt and second line bc we foind it unneccesasry. All it did was make a 1 second delay.    VVVV (downarrowsV) This is calling the functions on the bottom.

	});

	$(".expense input").on("change input", function (e) {
		var new_budget = benefit; //the inputs related to the expense, trigger the following functions.
		//console.log(new_budget);

		$(".expense input").each(function () {
			var value = ($(this).val());
			if (value !== "") {
				value = parseFloat(value);
			} else {
				value = 0;//if the value does not equal anthing, it's zero.
			}
			new_budget = new_budget - value;
			if (new_budget <= 0) {
				console.log("red")
				$(".total_budget").addClass("changeHed");
			}
			else if (new_budget >= 0){
				$(".total_budget").removeClass("changeHed");
			}
		

		});




		var startAnimationValue = $(".total_budget").find("span").text() != "" ?  $(".total_budget").find("span").text() : new_budget;//if the total_budget is not empty then use total budget. Instead of using new_budget which was happening before
		$(".total_budget").find("span").text(new_budget);
		$(".total_budget").find("span").prop('Counter', startAnimationValue).animate({
			Counter: new_budget
		},{
			duration: 100,
			easing: 'swing',
			step: function (budget) {
				if(budget){
				$(".total_budget").find("span").text(Math.ceil(budget));
			}
			}
		});

		//if (new_budget < 0) {
			//alert("You're over budget, time to borrow money from the Chinese!!!")
		//}

	});

});
