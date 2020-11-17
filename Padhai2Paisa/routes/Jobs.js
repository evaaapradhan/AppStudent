var express = require('express');
var router = express.Router();
var jobs = require('../resources/user'); 
//let Jobs = require('../models/user');


router.get('/register', function (req, res) {
    res.render('Signup', {
        title: 'SignUpCompany', jobsList: jobs,
    });
});

router.get('/postjobs', function (req, res) {
    res.render('Postform', {
        title: 'postform',
    });
});

module.exports = router;