var express = require('express');
var router = express.Router();

router.get('/index', function (req, res) {
    res.send('<h1> b page </h1>');
})

exports.router =router;