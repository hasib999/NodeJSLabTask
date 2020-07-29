var express     = require('express');
var bodyParser  = require('body-parser');
var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var logout 		= require('./controller/logout');
var employee    = require('./controller/employee');
var app         =express();

//config
app.set('view engine','ejs');


//middleware
app.use(bodyParser());
app.use('/login',login);
app.use('/logout',logout);
app.use('/admin',admin);
app.use('/employee',employee);

app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a> ");
});


app.listen(3000,function(){
    console.log('HTTP Server started at 3000.......');
});