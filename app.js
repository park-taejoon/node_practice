var express = require('express');

var app = express();
console.log("path :",__dirname);
app.use(express.static(__dirname + '/public'));
app.use(function (request, response) {
    response.writeHead(200,{ 'Content-Type': 'text/html'});
    response.end('<img src="/you.jpg" width="100%">');
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})