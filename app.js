const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require("./routes");
const bodyParser = require("body-parser");

const twitterApp = express();

twitterApp.use(bodyParser.urlencoded({ extended: false }))
twitterApp.use(bodyParser.json())


twitterApp.set('view engine', 'html'); // have res.render work with html files
twitterApp.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{ noCache: true }); // point nunjucks to the proper directory for templates


twitterApp.use(express.static('public'));
twitterApp.use("/", routes);


twitterApp.listen(3000, function() {
    console.log('server listening')
}) 

twitterApp.use(function(req, res, next) {
    console.log(req.method + ' / ' + res.statusCode)
    next();
})






