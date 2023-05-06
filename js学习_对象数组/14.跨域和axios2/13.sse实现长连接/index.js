// SSE : server send event  ,服务端推送数据到客户端 ；
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let app = express();
const static = express.static;
app.use(bodyParser.json());

app.use(static("./static"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.get("/addmessage",(req,res)=>{
    res.json({
        info:"添加成功222",
        status:1
    })
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


app.get("/sendata",(req,res)=>{
    // sse 需要设置一个固定的头部 ；
    res.setHeader("Content-Type","text/event-stream");
    let messagedata = fs.readFileSync("./data/message.json");
    // 需要data：声明 ，然后 通过 \r\n\r\n 作为数据的结尾 
    res.write(`data:${messagedata}\r\n\r\n`);
    // res.send()  // write  和 end
    setInterval(()=>{
        let messagedata2 = fs.readFileSync("./data/message.json");
        res.write(`data:${messagedata2}\r\n\r\n`);
    },2000)
})


app.listen(8989);


// 1.复习  2.实现一个模块化的面向对象 ，王者荣耀的英雄选择页面