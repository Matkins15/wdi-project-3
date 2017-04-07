require('dotenv').config();

var express = require('express');
var app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(err){
  console.log('err');
  process.exit(-1);
});

app.use(express.static(__dirname + '/public'));




app.listen(process.env.PORT || 3000, function(){
  console.log("App listening succesfully")
});
