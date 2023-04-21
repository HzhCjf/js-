const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// let bodyParser = require("./bodyParser.js");
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    // 加载表单发送post请求；
    res.sendFile(__dirname+"/views/index.html");
})

app.post("/post",(req,res)=>{
    console.log(req.body);
    // console.log("有post参数过来了");
    // let str = "";
    // req.on("data",chunk=>{
    //     str+= chunk;
    // })
    // req.on("end",()=>{
    //     // console.log(str);
    //     let obj = qs.parse(str);
    //     console.log(obj);
    // })
    res.send(`姓名是${req.body.uname};年龄是${req.body.age}`);
})

app.post("/post2",(req,res)=>{
    console.log(req.body);
    // console.log("有post参数过来了");
    // let str = "";
    // req.on("data",chunk=>{
    //     str+= chunk;
    // })
    // req.on("end",()=>{
    //     // console.log(str);
    //     let obj = qs.parse(str);
    //     console.log(obj);
    // })
})



app.listen(8989);