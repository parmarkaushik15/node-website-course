// grab dependencies ================
const express    = require('express'),
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
app.use(require('./app/routes'));

// start the app server =============
app.listen(port, () => {
  console.log('App listening on http://localhost:' + port);
});