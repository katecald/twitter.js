const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require("./routes");
const twitterApp = express();



twitterApp.set('view engine', 'html'); // have res.render work with html files
twitterApp.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{ noCache: true }); // point nunjucks to the proper directory for templates


twitterApp.use(express.static('public'));
twitterApp.use("/", routes);


twitterApp.listen(3000, function() {
    console.log('server listening')
}) 

// twitterApp.get('/', function(req, res, next) {
//     res.send('WELCOME!')
//     next()
// })



twitterApp.use(function(req, res, next) {
    console.log(req.method + ' / ' + res.statusCode)
    next();
})

twitterApp.use('/special/', function(req, res, next) {
    console.log('You reached the special area')
    next();
})



var locals = {//declaring a locals var to hold all the variable created with nunjucks
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
// var
//callback doesn't render in he browser or the front end 

// twitterApp.get('/views/index.html', function(req, res, next) {
//     res.render('index.html', locals);
//     next();
// })


