var maria = require('mariadb');
var client = maria.createConnection({
    user : null,
    password : null
});

client.query('USE nata');
client.query('select * from nata.t_user', function (err, result, fields) {
    if(err) {
        console.log('query err');
    }else {
        console.log(result)
    }
})