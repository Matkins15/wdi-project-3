var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

var  usersController = require('../controllers/users.js');

router.route('/user')
	.get(usersController.getAll)
	.post(usersController.createUserAction);

// router.route('/users/:id')
// 	.get(usersController.)





module.exports = router

