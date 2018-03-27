$(document).ready(function () {

	$("#form1").on("change", function () {
		var comm = $(this);
		// console.log(comm);
		var benefit = comm.find(':selected').val(),
			default_rent = comm.find(":selected").data("rent");
		console.log(benefit);
		$(".money").val(benefit);
		$("#rent").find("input").val(default_rent);

	});

	$(".expense input").on("keyup keydown keypress change", function (e) {
		var new_budget = benefit;
		console.log(new_budget);

		$(".expense input").each(function () {
			var value = ($(this).val());
			if (value !== "") {
				value = parseFloat(value);
			} else {
				value = 0;
			}
			new_budget -= value;
		});
		$(".total_budget").find("span").text(new_budget);

		if (new_budget < 0) {
			alert("You're over budget, time to borrow money from the Chinese!!!")
		}

	});

});