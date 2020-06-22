var express = require('express');

var app = express();

app.use(function (request, response) {
    var output = [];
    for (var i= 0; i< 4; i++){
        output.push({count : i, name : 'name - '+i});
    }
    response.send(output);
});

app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})