var express = require('express');
var router = express.Router();
const jobs = require('../resources/user');
let Jobs = require('../models/user');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   user.find({}, function(err, jobs) {
//     if (!err) {
//       res.render('index', { title: 'Padhai2Paisa', jobList: jobs });
//     } else {
//       console.log('error', err);
//     }
//   })
//  });

router.get('/', function (req, res, next) {
  res.render('StudentView', {
      title: 'Padhai2Paisa', 
  });
});
module.exports = router 


