var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Antioch Volunteer' });
});

/* GET Hello World page. */
router.get('/TimeOff', function(req, res) {
    res.render('ScheduleTimeOff', { title: 'Schedule Time Off' })
});

router.get('/login', function(req, res) {
		res.render('userAuth')
});

module.exports = router;
