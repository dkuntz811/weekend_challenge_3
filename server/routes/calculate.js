var express = require('express');
var router = express.Router();

router.post('/plus', function (req, res){
	var math = req.body;
	var answer = parseInt(math.num1) + parseInt(math.num2);
	console.log('answer: ', answer);
	res.send(answer.toString());
});

router.post('/min', function (req, res){
	var math = req.body;
	var answer = parseInt(math.num1) - parseInt(math.num2);
	console.log('answer: ', answer);
	res.send(answer.toString());
});

router.post('/mult', function (req, res){
	var math = req.body;
	var answer = parseInt(math.num1) * parseInt(math.num2);
	console.log('answer: ', answer);
	res.send(answer.toString());
});

router.post('/div', function (req, res){
	var math = req.body;
	var answer = parseInt(math.num1) / parseInt(math.num2);
	console.log('answer: ', answer);
	res.send(answer.toString());
});

module.exports = router;
