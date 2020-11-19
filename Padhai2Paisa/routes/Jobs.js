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

router.get('/JobsList', function (req, res) {
    res.render('jobslist', {
        title: 'jobs',
        
    });
});

router.post('/save', function(req, res, next) {
    const job = new Jobs(req.body);
    let promise = job.save();
    promise.then(() => {
        console.log('Job added')
        res.redirect('jobslist');
    })
 });

module.exports = router;