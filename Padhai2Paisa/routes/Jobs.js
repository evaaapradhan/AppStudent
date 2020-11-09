var express = require('express');
var router = express.Router();
var jobs = require('../resources/user'); 
//let Jobs = require('../models/user');


router.get('/apply', function (req, res) {
    res.render('index', {
        title: 'Apply', jobsList: jobs,
    });
});

module.exports = router;