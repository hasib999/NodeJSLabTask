var express   = require('express');
var router    = express.Router();
var DB        =require('../data');

var emp=DB();

router.get('/', function(req, res){
	res.render('admin/index');
});

router.get('/AddEmployee',function(req,res){
	res.render('admin/AddEmployee')
});

router.get('/AllEmployeeList',function(req,res){
	var allEmp=emp.getAllemployee();
	var data={allEmployeeList:allEmp}
	res.render('admin/AllEmployeeList',data);
});
router.post('/addEmployee',function(req,res){
	emp.createEmployee(req.body);
	res.redirect('/admin/allEmployeeList');
});




module.exports = router;