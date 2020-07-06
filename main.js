var module = require('./module/module.js');
var client = require('./maria.js');
console.log('abs(-273) = %d ',module.abs(-273));
console.log('circleArea(3) : = %d', module.circleArea(3));
client.query('select * from t_user', function (err, rows, fields) {
    client.end();
    if(err) {
        console.log('query err :',err);
    }else {
        console.log(rows)
    }
})