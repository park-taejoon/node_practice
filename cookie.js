var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();


app.use(cookieParser());


app.get('/getCookie',function (request, response) {
    response.send(request.cookies)
});

app.get('/setCookie',function (request, response) {
    response.cookie('string', 'cookie',{
        maxAge : 6000,
        secure : false
    });
    response.cookie('json',{
        name : 'cookie',
        property : 'delicious'
    })

    response.redirect('/getCookie')
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})