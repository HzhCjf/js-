// ajax ： async JavaScript  and  xml ，异步js和xml
// js ： json  数据  ，和 xml 数据
// json 、xml ： 主流的数据传输格式；

// 异步的传递 json和 xml 和后端进行交互 
// 数据交互必须基于 跳转 ，刷新一下页面 才会发送 http请求 ，重新加载体验不好
// ajax ：阻止页面的跳转行为 ，然后传递数据 ，ajax 无刷。
const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/get", (req, res) => {
    let { uname } = req.query;
    if (uname === "张三") {
        res.json({
            info: "用户名正确",
            stauts: 1
        });

    }else{
        res.json({
            info: "用户名错误",
            stauts: 0
        });
    }
})


app.listen(8989);
