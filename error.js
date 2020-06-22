var express = require('express');

var app = express();

app.use(function (req, res) {
    var agent = req.header('User-Agent');
    console.log(req.headers)
    console.log(agent);
    res.sendStatus(200);
})


app.use(function (request, response, next) {
    response.status(404).send('<h1> ERROR </h1>');
});



app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})