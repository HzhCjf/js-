// ajax ： async JavaScript  and  xml ，异步js和xml
// js ： json  数据  ，和 xml 数据
// json 、xml ： 主流的数据传输格式；

// 异步的传递 json和 xml 和后端进行交互 
// 数据交互必须基于 跳转 ，刷新一下页面 才会发送 http请求 ，重新加载体验不好
// ajax ：阻止页面的跳转行为 ，然后传递数据 ，ajax 无刷。
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({extended:true})); // 接收表单格式的数据
app.use(bodyParser.json());  //接收 json格式的数据
app.use(bodyParser.text()); // 接收文本格式的请求体数据；
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/get", (req, res) => {
    console.log(req.query);
    res.json(req.query);
})

app.post("/post", (req, res) => {
    console.log(req.body);
    res.json({name:"post数据",status:1});
})


app.listen(8989);
