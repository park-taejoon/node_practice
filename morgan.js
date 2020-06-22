var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'))
app.use(morgan(':status'))
app.use(morgan('common'))
app.use(morgan('dev'))
app.use(morgan('short'))
app.use(morgan('tiny'))
app.use(function (request, response) {
    response.writeHead(200,{ 'Content-Type': 'text/html'});
    response.end('<img src="/you.jpg" width="100%">');
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})