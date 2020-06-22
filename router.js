var express = require('express');

var app = express();

app.use("/a", require("./router/a").router);
app.use("/b", require("./router/b").router);


app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})
//http://localhost:52273/b/index
//http://localhost:52273/a/index