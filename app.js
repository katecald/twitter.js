const express = require('express');
const volleyball = require('volleyball')

const twitterApp = express();




twitterApp.listen(3000, function() {
    console.log('server listening')
}) 

twitterApp.get('/', function(req, res, next) {
    res.send('WELCOME!')
    next()
})

twitterApp.use(function(req, res, next) {
    console.log(req.method + ' / ' + res.statusCode)
    next();
})

twitterApp.use('/special/', function(req, res, next) {
    console.log('You reached the special area')
    next();
})