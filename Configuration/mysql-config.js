const mysql = require('mysql');
const mysql_con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'MichiFinder',
});

module.exports = mysql_con;
