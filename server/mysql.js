var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', // 主机地址
    // port:3306,       // 端口号
    user: 'rooter', // 用户名
    password: 'wyz@13700702559', // 密码
    database: 'mydb', // 数据库名称
    charset: 'UTF8_GENERAL_CI' // 字符集
});

// 链接数据库
connection.connect(err => {
    if (err) throw err;
    console.log('数据库连接成功!');
});

// 查询
function select(query) {
    connection.query(query, function (err, res, fields) {
        if (err) throw err;
        console.log(res);
    });

}
// 查询
// select('SELECT * FROM sp_user');

// 插入数据
function insert(sql, addParams) {
    connection.query(sql, addParams, (err, res) => {
        if (err) throw err;
        console.log(res);
    });
}

var createTime = 1512122098;
var updaeTime = 1512033129;
var addParams = [4, '小明', createTime, updaeTime]
// insert('INSERT INTO sp_user(user_id,username,create_time,update_time) VALUES(?,?,?,?)', addParams);



// 更新数据
function upDate(upsql, upsqlParams) {
    connection.query(upsql, upsqlParams, function (err, res) {
        if (err) throw err.message
        console.log(res);
    });
}
var upsql = 'UPDATE sp_user SET username=? WHERE user_id=4'
var upsqlParams = ['小红'];
// update(upsql, upsqlParams);


// 删除数据
function deleteDate(delSql) {
    connection.query(delSql, (err, res) => {
        if (err) throw err;
        console.log(res);
    })
}
var delSql = 'DELETE FROM sp_user WHERE user_id=3'
deleteDate(delSql);





connection.end();