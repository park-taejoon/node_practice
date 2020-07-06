var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (req, res) {
    fs.readFile('./web/page.html', function (err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    })
}).listen(52271, function () {
    console.log("Server Running at http://127.0.0.1:52271");
})

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('rint', function(data) {
        //클라이언트가 전송한 데이터를 출력한다.
        console.log("Client Send Data : ",data);

        //클라이언트에 smart 이벤트를 발생시킨다.
        //socket.emit('smart', data);

        //public
        //io.socket.emit('smart', data);

        //broadcast
        socket.broadcast.emit('smart', data);
    })
})