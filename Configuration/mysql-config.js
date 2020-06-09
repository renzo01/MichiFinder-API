const mysql = require('mysql');
const mysql_con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'MichiFinder',
});

export default mysql_con;
