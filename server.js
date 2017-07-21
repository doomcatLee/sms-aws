var port = process.env.PORT || 3000;
var sms = require('./public/js/sms.js');
var express = require('express');

var http = require('http');

var bodyParser = require('body-parser');
var request = require('request');
var router = express.Router();

var app = express();


//THIS IS SO YOU CAN TAKE HTML FORM DATA INTO APP.JS
app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies


app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

app.post('/message', function(req, res) {
  var message = req.body.message;
  var toPhoneNumber = req.body.toPhoneNumber;
  sms.sendSms(toPhoneNumber,message);
  console.log(message);

  res.sendfile('./public/index.html');
});

app.listen(port);
