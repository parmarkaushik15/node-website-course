var express = require('express'),
  router    = express.Router();

module.exports = router;

app.get('/',          showHome);
app.get('/about',     showAbout);
app.get('/contact',   showContact);
app.post('/contact',  processContact);

// home page
function showHome(req, res) {
  res.sendFile(__dirname + '/index.html');
}

// about page
function showAbout(req, res) {
  // list of users
  const users = [
    { name: 'Chris', email: 'chris@scotch.io', avatar: '' },
    { name: 'Nick', email: 'nick@scotch.io', avatar: '' },
    { name: 'Holly', email: 'holly@scotch.io', avatar: '' },
    { name: 'Ado', email: 'ado@scotch.io', avatar: '' }
  ];

  res.sendFile(__dirname + '/index.html', { users: users });
}

// contact page
function showContact(req, res) {
  res.sendFile(__dirname + '/contact.html');
}

// process the contact page
function processContact(req, res) {
  console.log(req.body);
}