var express = require('express');
var router = express.Router();
const jobs = require('../resources/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Padhai2Paisa', jobsList: jobs });
});

module.exports = router;

