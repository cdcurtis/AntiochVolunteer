var express = require('express');
var router = express.Router();


/* GET Time Off Form page. */
router.get('/ScheduleTimeOff', function(req, res) {
  res.render('ScheduleTimeOff', { title: 'Schedule Time Off' });
});
