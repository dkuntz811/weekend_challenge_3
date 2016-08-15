$(document).ready(function(){
	console.log("I'm Ready");
	   //getNumbers();
	$("#calculator").on('submit', '#plus', function (){
		console.log("plus is working");
		console.log(numbers);
		event.preventDefault();

	  var numbers = {};

		$.each($("#calculator").serializeArray(), function (i, field) {
		      numbers[field.name] = field.value;


		    });

				console.log('numbers submitted as', numbers);

		$.ajax({
			type: 'POST',
			url: '/calculator',
			data: numbers,
			success: function (response) {
				console.log('POST /calculator works');
				getNumbers();
			}
		});

		function getNumbers() {
			$.ajax({
				type: 'GET',
				url: '/calculator',
				success: function (calculator) {
					$('#result').empty();
					calculator.forEach(function (numbers) {
						$('#result').append('<div>' + number.num1 + number.num2 + '</div>');
					});
				},
				error: function () {
					console.log('Get /calculator did not work');
				},
			});
		}


	});
});
