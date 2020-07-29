var express   = require('express');
var router    = express.Router();
var data      =require('../data');

var emplo=data();


router.get('/',function(req,res){
    res.render('employee/index');
});

router.get('/MyProfile',function(req,res){
    var info=emplo.getAllemployee()[0];
    res.render('employee/MyProfile',info);
});

router.get('/UpdateProfile',function(req,res){
    var info=emplo.getAllemployee()[0];
    res.render('employee/UpdateProfile',info);
});

router.post('/UpdateProfile',function(req,res){
    var info=req.body;
    emplo.updateEmployee(info);
    res.redirect('/employee/MyProfile');
});

module.exports = router;


