const mysql = require('mysql');
const mysql_con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'MichiFinder',
});

module.exports = mysql_con;
