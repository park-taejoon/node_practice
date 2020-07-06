var maria = require('mysql');
var client = maria.createConnection({
    host: 'localhost',
    post: 3306,
    database : "nata",
    user : "",
    password : ""
});

//client.connect();
client.query('USE nata');
module.exports = client;
// client.query('select * from t_user', function (err, rows, fields) {
//     client.end();
//     if(err) {
//         console.log('query err');
//     }else {
//         console.log(rows)
//     }
// })