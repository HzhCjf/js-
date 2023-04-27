// 3000端口服务器 
// 服务器代理 ： vue react 使用的方式 
const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware")

const app = express();

// 利用中间件转发 ajax发送过来的请求 
// 配置转发中间件
// /api 是遇到 接口以api 开头的就转发到4000端口
// http://localhost:3000/api/get  --->http://localhost:4000/get

app.use("/api",createProxyMiddleware({
    target:"http://localhost:4000",  // 转发的服务器地址
    pathRewrite:{
        "^/api":""
    }
}))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.get("/get",(req,res)=>{

    res.json({
        info:"3000端口下的数据"
    })
})

app.listen(3000);


