var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var multipart = require('connect-multiparty');
var app = express();

//미들웨어를 설정합니다.
app.use(cookieParser());
app.use(multipart({uploadDir : __dirname + '/public'}))

app.get('/',function (req, res) {
    fs.readFile('./web/loginMultipart.html', function (err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});


app.post('/up',function (req, res) {
    var comment = req.body.comment;
    var imageFile = req.files.image;

    console.log("post");
    console.log(req.body);
    console.log(req.files);

    if(imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        if (type.indexOf('image') != -1) {
            var outputPath = __dirname + '/public/'+Date.now() + '_'+name;
            fs.rename(path, outputPath, function (err) {
                res.redirect('/');
            })
        } else {
            fs.unlink(path, function (err) {
                res.sendStatus(400);
            });
        }
    } else {
        res.sendStatus(400)
    }

    res.redirect('/');

});



app.listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
})