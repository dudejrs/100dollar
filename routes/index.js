var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courses',function(req, res, next){
	res.render('courses', { title : 'courses'});
});

router.get('/course',function(req, res, next){
	res.render('course')});

module.exports = router;
