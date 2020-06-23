var fs = require('fs');
var express = require('express');
var session = require('express-session');
var app = express();

//미들웨어를 설정합니다.

app.use(session({
        secret : 'secret key',
    resave : false,
    saveUninitialized: true,
    cookie : {
            maxAge : 6000
    }
}));

app.use(function (req, res) {
    req.session.now = (new Date()).toUTCString();
    req.session.name = 'tjpark';
    res.send(req.session);
    console.log(req.session);
})



app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})