const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

var path = require("path");

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});



router.post('/tweets', function (req, res) {
  tweetBank.add(req.body.name, req.body.text)
  res.redirect('/')
})

// router.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })

router.get('/stylesheets/style.css', function (req, res) {
    res.sendFile("/stylesheets/style.css");
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: false } );
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  console.log(id)
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: list } );
});

module.exports = router;