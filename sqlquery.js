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

let name = "axc"
let pwd = "123456"
let sqldo = `insert into  users(name,pwd)  values("${name}","${pwd}")`

connection.query(sqldo, (err, data) => {
    if (err) {
        throw err;
    } else {
        // if (data.length > 0) {
        //     console.log("登陆成功")
        // } else {
        //     console.log("登录失败");
        // }

        if (data.affectedRows === 1) {
            console.log("添加用户成功")
        }
    }
});
// 关闭
connection.end();