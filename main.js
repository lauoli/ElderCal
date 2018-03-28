var benefit;

$(document).ready(function () {

	$("#form1").on("change", function () {
		var comm = $(this);
		// console.log(comm);
		benefit = comm.find(':selected').val();
		var default_rent = comm.find(":selected").data("rent");
		//console.log(benefit);
		$(".money").val(benefit);
		$("#rent").find("input").val(default_rent);

		setTimeout(function () {
			$("#rent").find("input").trigger("change");
		}, 1000);

	});

	$(".expense input").on("keyup keydown keypress change", function (e) {
		var new_budget = benefit;
		//console.log(new_budget);

		$(".expense input").each(function () {
			var value = ($(this).val());
			if (value !== "") {
				value = parseFloat(value);
			} else {
				value = 0;
			}
			new_budget -= value;
			if (new_budget <= 0) {
				console.log("red")
				$(".total_budget").addClass("changeHed");
			}

		});



		$(".total_budget").find("span").text(new_budget);
		$(".total_budget").find("span").prop('Counter', benefit).animate({
			Counter: $(".total_budget").find("span").text()
		}, {
			duration: 1500,
			easing: 'swing',
			step: function (now) {
				$(".total_budget").find("span").text(Math.ceil(now));
			}
		});

		if (new_budget < 0) {
			//alert("You're over budget, time to borrow money from the Chinese!!!")
		}

	});

});