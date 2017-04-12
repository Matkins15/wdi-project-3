var mongoose = require('mongoose');
var User = require('../models/user.js');
var Jobs = require('../models/job.js');
var Notes = require('../models/notes.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect(process.env.MONGODB_URI);

var users = [
  { email: 'joy@joy.com', 
  password:'joy',  
    jobs: {
      company: 'Apple',
      job_title: 'Peel Dev',
      phone: '5555555555',
      email: 'core@apple.com',
      website: 'http://notapple.com',
        notes: {
          notes: 'So many flat white surfaces!'
        }, {
          notes: 'Interviewed with Mike.'
        }
    },
    {
      company: 'Mango',
      job_title: 'Junior Juicer',
      phone: '5555555555',
      email: 'mango@fruity.com',
      website: 'http://fruity.com',
        notes: {notes: 'Spoke to Heather over the phone'}, {notes: 'Interview set for 05/24/2017'}
    },
  },
];

User.create(users)
  .then( console.log('done'));