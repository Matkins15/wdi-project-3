var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var User = require('../models/schema')
var Jobs = require('../models/schema')
var Notes = require('../models/schema');

//GET '/'
router.get('/', function homeAction(request, response){

});

//GET User Dashboard
// router.get('/')

//GET User.Jobs
router.get('/:id',)

//GET User.Jobs.Notes

//POST User

//POST User.Jobs

//POST User.Jobs.Notes

//PATCH User.Jobs

//PATCH User.Jobs.Notes //FOR LATER, STRETCH GOAL

//DELETE User.Jobs

//DELETE User.Jobs.Notes

module.exports = router;