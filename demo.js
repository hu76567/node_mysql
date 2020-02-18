// 引入sql包
var mysql = require('mysql');
// 配置
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'database'
});
// 连接
connection.connect();
// 执行sql
connection.query('select id,name from users', (error, results) => {
    if (error) {
        throw error;
    } else {
        console.log(results);
    }
});
// 关闭
connection.end();