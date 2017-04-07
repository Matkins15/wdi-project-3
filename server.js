require('dotenv').config();

var express = require('express');
var logger = require('morgan');
var app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(err){
  console.log('err');
  process.exit(-1);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));




app.listen(process.env.PORT || 3000, function(){
  console.log("App listening succesfully")
});
