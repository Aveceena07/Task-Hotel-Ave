const mysql = require('mysql');

const connection = mysql.createConnection({
    host        :   'localhost',
    user        :   'root',
    password    :   '',
    database    :   'db_hotel'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('koneksi  berhasil !!');
    }
})
module.exports = connection;