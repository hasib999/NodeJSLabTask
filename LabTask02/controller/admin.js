var express   = require('express');
var router    = express.Router();
var data        =require('../data');

var emplo=data();

router.get('/', function(req, res){
	res.render('admin/index');
});

router.get('/AddEmployee',function(req,res){
	res.render('admin/AddEmployee')
});

router.get('/AllEmployeeList',function(req,res){
	var allEmp=emplo.getAllemployee();
	var info={allEmployeeList:allEmp}
	res.render('admin/AllEmployeeList',info);
});
router.post('/addEmployee',function(req,res){
	emplo.createEmployee(req.body);
	res.redirect('/admin/allEmployeeList');
});

router.get('/update/:id',function(req,res){
	var id=req.params.id;
	var info=emplo.getEmployee(id);

	res.render('admin/update',info);
})

router.post('/update/:id',function(req,res){
	var info=req.body;
	info.id=req.params.id;
	emplo.updateEmployee(info);
	res.redirect('/admin/AllEmployeeList');
});

router.get('/delete/:id',function(req,res){
	emplo.deleteEmployee(req.params.id);
	res.redirect('/admin/AllEmployeeList');
});



module.exports = router;