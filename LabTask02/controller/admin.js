var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('admin/index');
});

router.post('/', function(req, res){

	res.send('Wellcome to Admin page');
	
	
});

module.exports = router;