var express = require('express');
var router = express.Router();
var jobs = require('../resources/user'); 
//let Jobs = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('StudentView', {
        title: 'Apply',
    });
});




module.exports = router;