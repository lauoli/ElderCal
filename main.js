$(document).ready(function () {

	$("#form1").on("change", function () {
		var comm = $(this);
		// console.log(comm);
		var benefit = comm.find(':selected').data("price");
		console.log(benefit);
		$(".money").text(benefit);

	});

	$(".expense input").on("keyup keydown keypress change", function (e) {
		var new_budget = benefit;

		$(".expense input").each(function () {
			var value = ($(this).val());
			if (value !== "") {
				value = parseFloat(value);
			} else {
				value = 0;
			}
			new_budget -= value;
		})
		$(".total_budget").find("span").text(new_budget);

		if (new_budget < 0) {
			alert("You're over budget, time to borrow money from the Chinese!!!")
		}

	});

});