var express = require('express');

var app = express();

app.use(function (req, res) {
   var name = req.query.name;
   var region = req.query.region;
   res.send('<h1>' +name +' - ' + region + '</h1>');
})
//http://localhost:52273/?name=tjpark&region=hoho

app.use(function (request, response, next) {
    response.status(404).send('<h1> ERROR </h1>');
});



app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})