$(document).ready(function(){
	console.log("I'm Ready");
	   //getNumbers();
	$("#calculator").on('click',  function (){
		console.log("plus is working");
		console.log(numbers);
		event.preventDefault();

	  var numbers = {};

		var fields = $(this).serializeArray();
		    fields.forEach(function (field){
					numbers[field.name] = field.value;
				});

				console.log('given math numbers', numbers);

  $.ajax({
		type: 'POST',
		url: '/calculate/' + numbers.operation,
		data: numbers,
		success: updateDom
	});

	function updateDom(response) {
		$("#result").text(response);
	}

	});

});
