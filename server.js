'use strict';

// grab dependencies ================
var express      = require('express'),
  app            = express(),
  port           = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts'),
  bodyParser     = require('body-parser'),
  morgan         = require('morgan');  

// configure our app ================
// make sure our app can grab data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// log all requests to the console 
app.use(morgan('dev'));
 
// use express layouts
app.use(expressLayouts);

// set static files (like css and js) location 
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// route our app ====================

// home page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// about page
app.get('/about', function(req, res) {
  // list of users
  let users = [
    { name: 'Chris', email: 'chris@scotch.io', avatar: '' },
    { name: 'Nick', email: 'nick@scotch.io', avatar: '' },
    { name: 'Holly', email: 'holly@scotch.io', avatar: '' },
    { name: 'Ado', email: 'ado@scotch.io', avatar: '' }
  ];

  res.sendFile(__dirname + '/index.html', { users: users });
});

// contact page
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

// process the contact page
app.post('/contact', function(req, res) {
  console.log(req.body);
});

// start the app server =============
app.listen(port, function() {
  console.log('App listening on http://localhost:' + port);
});