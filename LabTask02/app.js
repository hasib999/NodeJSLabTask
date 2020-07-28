var express     = require('express');
var bodyParser  =require('body-parser');
var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var AddEmployee 		= require('./controller/AddEmployee');
var AllEmployeeList 		= require('./controller/AllEmployeeList');
var logout 		= require('./controller/logout');

var app         =express();

//config
app.set('view engine','ejs');


//middleware
app.use(bodyParser());
app.use('/login',login);
app.use('/logout',logout);
app.use('/admin',admin);
app.use('/AddEmployee',AddEmployee);
app.use('/AllEmployeeList',AllEmployeeList);

app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a> ");
});


app.listen(3000,function(){
    console.log('HTTP Server started at 3000.......');
});