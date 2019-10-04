const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'juan1445',
    database: 'practicando',
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return
    }else{
        console.log('Base de datos conectada');
    }
});

module.exports = mysqlConnection;