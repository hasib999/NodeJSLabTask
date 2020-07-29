var express   = require('express');
var router    = express.Router();
var data      =require('../data');

var employees=data();

router.get('/', function(req, res){
	res.render('admin/index');
});

router.get('/addEmployee',function(req,res){
	res.render('admin/AddEmployee')
});

router.post('/', function(req, res){

	res.send('Wellcome to Admin page');
	
	
});

module.exports = router;