var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

//미들웨어를 설정합니다.
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/',function (req, res) {
    if(req.cookies.auth) {
        res.send('<h1>Login Success </h1>');
    } else {
        res.redirect('login')
    }

});

app.get('/login',function (req, res) {
    fs.readFile('./web/login.html', function (err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });

});

app.post('/login',function (req, res) {
    var login = req.body.login;
    var pass = req.body.password;

    console.log(login ,pass);
    console.log(req.body);


    if(login == 'tjpark' && pass == '1234') {
        res.cookie('auth', true, {
            maxAge : 3000,
            secure : false
        });
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});



console.log("path :",__dirname);
app.use(express.static(__dirname + '/public'));
app.use(function (request, response) {
    response.writeHead(200,{ 'Content-Type': 'text/html'});
    response.end('<img src="/you.jpg" width="100%">');
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})