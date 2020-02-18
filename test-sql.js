const sqldo = require("./sqldoing")
console.log(sqldo)
sqldo.doSql("select id,name from users", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})