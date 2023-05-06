// 长连接 ： 数据传递不能停止 ；
/* 
1.ajax 轮询 ： 定时器 不停的发送 ajax 请求最新数据；
2.sse： server send event  ，服务端推送数据 
3.websocket 协议 基于 http协议上的一个协议 ，双工协议 ；

*/
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let app = express();
const static = express.static;
app.use(static("./static"));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.post("/addmessage",(req,res)=>{
    console.log(req.body);
    let data = JSON.parse( fs.readFileSync("./data/message.json"));
    data.push(req.body);
    fs.writeFileSync("./data/message.json",JSON.stringify(data));
    res.json({
        info:"添加成功",
        status:1
    })
})

app.get("/getmessage",(req,res)=>{
    let data =JSON.parse(  fs.readFileSync("./data/message.json"));
    res.json(data);
})

app.listen(8989);