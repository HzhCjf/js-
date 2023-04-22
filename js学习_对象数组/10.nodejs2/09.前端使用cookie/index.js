// 前端（客户端）使用cookie ： 
// cookie ： 小甜饼 。 使用文件形式存储数据 ，离线存储数据的一种方案 。 cookie是浏览器端存储数据的方案 ； 持久化保存数据的方案；

// cookie 操作 ： 1.客户端可以操作  2. 服务端也可以操作cookie

const express = require("express");
let app = express();
let router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.use(router);
app.listen(8989);
