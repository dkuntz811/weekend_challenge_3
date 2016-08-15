var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var calculator = [];

app.set('port', process.env.PORT || 3000);


app.use(bodyParser.urlencoded({extended: true}));


app.post('/calculator', function (req, res) {
  console.log('request: ', req.body);
	var calculator = req.body;
	var numOne = calculator.num1;
	var numTwo = calculator.num2;

   calculator.push(req.body);
	 res.sendStatus(201);
});

app.get('/calculator', function (req, res) {
  res.send(calculator);
});

app.get('/*', function (req, res){
	var file = req.params[0] || '/views/index.html';
	res.sendFile(path.join(__dirname, './public', file));
});


app.listen(app.get('port'), function () {
  console.log('Server now running at port ', app.get('port'));
});
