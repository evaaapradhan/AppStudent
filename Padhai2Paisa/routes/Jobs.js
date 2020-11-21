var express = require('express');
var router = express.Router();
var job = require('../resources/user'); 
let Jobs = require('../models/user');


router.get('/register', function (req, res) {
    res.render('Signup', {
        title: 'SignUpCompany', 
    });
});

router.get('/postjobs', function (req, res) {
    res.render('Postform', {
        title: 'postform',
    });
});

router.get('/apply', function (req, res) {
    res.render('applyjob', {
        title: 'jobs',
        
    });
});

router.post('/applysave', function (req, res) {
  res.render('jobslist', {
      title: 'jobs',
      
  });
});
/* GET home page. */
router.get('/Jobslist', function(req, res, next) {
  Jobs.find({}, function(err, job) {
    if (!err) {
      res.render('jobslist', { title: 'Padhai2Paisa', jobList: job });
    } else {
      console.log('error', err);
    }
  })
 });

router.post('/save', function(req, res, next) {
    const job = new Jobs(req.body);
    let promise = job.save();
    promise.then(() => {
        console.log('Job added')
        res.redirect('jobslist');
    })
 });

 router.get('/blog', function (req, res) {
    res.render('blog', {
        title: 'blogpage',
        
    });
});

module.exports = router;