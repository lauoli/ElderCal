var benefit;

$(document).ready(function () {

	$("#form1").on("change", function () {
		var comm = $(this); //this is the dropdown.
		// console.log(comm);
		benefit = comm.find(':selected').val(); //this is the 3000
		var default_rent = comm.find(":selected").data("rent"); //gets the rent
		//console.log(benefit);
		$(".total_budget").find(".money").text(benefit); //in this case $3000-or the initial SS for the neighborhood
		$("#rent").find("input").val(default_rent); //when you select change it sets the default rent

		$(".expense input").each(function () {
			if ($(this).attr("id") != "rentinput") { //it will only loop over the inputs. except for the rentinput.
				$(this).val(""); //then it will reset the value to nothing, "".
			}
		});

		$("#rent").find("input").trigger("change");

	});

	$(".expense input").on("change", function (e) {
		var new_budget = benefit; //the inputs related to the expense, trigger the following functions.
		//console.log(new_budget);

		$(".expense input").each(function () {
			var value = ($(this).val());
			if (value != "") {
				value = parseFloat(value);
			} else {
				value = 0; //if the value does not equal anthing, it's zero.
			}
			new_budget = new_budget - value;
			if (new_budget < 0) {
				console.log("red")
				$(".balance").addClass("changeHed");
			} else if (new_budget >= 0) {
				$(".balance").removeClass("changeHed");
			}
		});



		console.log(new_budget);

		var startAnimationValue = ($(".balance").find("span").text() != "") ? parseFloat($(".balance").find("span").text()) : new_budget; //if the total_budget is not empty then use total budget. Instead of using new_budget which was happening before

		$(".balance").find("span").text(new_budget);

		if (new_budget != 0) {
			$(".balance").find("span").prop('Counter', startAnimationValue).animate({
				Counter: new_budget
			}, {
				duration: 100,
				easing: 'swing',
				step: function (budget) {
					if (budget) {
						$(".balance").find("span").text(Math.ceil(budget));
					}
				}
			});
		}

		//if (new_budget < 0) {
		//alert("You're over budget, time to borrow money from the Chinese!!!")
		//}

	});

});