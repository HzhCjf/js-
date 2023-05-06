// 3000端口服务器 
// 服务器代理 ： vue react 使用的方式 
const express = require("express");
const http = require("http");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.get("/get",(req,res)=>{
    // 通过 3000的服务器请求 4000端口的服务器 ；
    http.get("http://localhost:4000/get",req=>{
        let str = "";
        req.on("data",chunk=>{
            str += chunk;
        })
        req.on("end",()=>{
            console.log(str);
            let data = JSON.parse(str);
            res.json(data)
        })
    })
   
})

app.listen(3000);


