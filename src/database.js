const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
/*host:'localhost',
user: 'root',
password: 'root',
database: 'rpa'*/

host:'bpz4mgvvilkoebkc34og-mysql.services.clever-cloud.com',
user: 'uvtejtkofmhlwjas',
password: 'rOKjdBgecAcD0bAC8DUZ',
database: 'bpz4mgvvilkoebkc34og'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;

    }else{
        console.log('dd connect');
    }
})

module.exports = mysqlConnection;

