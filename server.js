var express = require('express');
var app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:project_three', function(){
  console.log('Mongo DB connected');
});

app.use(express.static(__dirname + '/public'));




app.listen(process.env.PORT || 3000, function(){
  console.log("App listening succesfully")
});
