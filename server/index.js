let express = require('express')
let cors = require('cors') // 跨域请求
let mysql = require('mysql') // 连接数据库
let app = express();
app.use(cors()); // 开启允许跨域请求
app.use(express.json()) // 识别json



var connection = mysql.createConnection({
    host: 'localhost', // 主机地址
    user: 'rooter', // 用户名
    password: 'wyz@13700702559', // 密码
    database: 'mydb', // 数据库名称
});

function query() {
    // 连接数据库
    connection.connect();

    // 查询
    connection.query('SELECT * FROM sp_user', (err, res) => {
        if (err) throw err;
        console.log(res);
    })
    connection.end();

}

app.get('/', (req, res) => {

    res.send({
        name: '小明',
        age: 18,
        req: req.body
    })
});

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})