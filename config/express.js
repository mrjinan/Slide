var express = require('express'),
    path = require('path'),
         consolidate = require('consolidate');
module.exports = function(){
    var app = express();
 
    app.engine('html',consolidate['swig'])
    app.set('view engine', 'html');
	app.set('views', './Views');
	
	app.use(express.static(path.resolve('./Public')));
    app.use(express.static(path.resolve('./data')));
    app.use(express.static(path.resolve('./Views')))
    app.route('/').get(function(req,res){
       res.render('index');
    });
    return app;
}