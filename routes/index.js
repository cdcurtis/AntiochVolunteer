var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/TimeOff', function(req, res) {
    res.render('ScheduleTimeOff', { title: 'Schedule Time Off' })
});

module.exports = router;
