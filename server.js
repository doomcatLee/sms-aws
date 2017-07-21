var port = process.env.PORT || 3000;
var sms = require('./public/js/sms.js');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

app.post('/message', function(req, res) {
  // var message = req.body.message;
  // var toPhoneNumber = req.body.toPhoneNumber;
  sms.sendSms('5039983176', 'message');
  // console.log(message);

  res.sendfile('./public/index.html');
});

app.listen(port);
