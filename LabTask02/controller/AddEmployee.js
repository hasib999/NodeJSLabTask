var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('admin/AddEmployee');
});

router.post('/', function(req, res){

	res.send('Wellcome');
	
	
});

module.exports = router;