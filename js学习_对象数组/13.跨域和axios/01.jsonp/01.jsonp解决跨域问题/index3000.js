// 3000 端口服务器 
// 跨域 ： 由于浏览器的安全策略 ，不允许 非同源的请求发送 ；
// 注意 ： 跨域是单纯的浏览器行为 ，如果没有浏览器就没有跨域问题；
// 同源 ： 协议、域名、端口 都要一样 
// 非同源 （跨越）： 协议、域名、端口 ，只要有一个不同就是跨域；
// http://localhost:8989/admin
// http://localhost:8989/admin/index
/* 
解决跨域问题 ： 
    1.jsonp ：利用script的不跨域特性 
    2.服务器代理 
    3.cors ： 跨域资源共享 ，纯的后端解决方案。利用设置返还头部解决跨域问题


*/


const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.get("/get",(req,res)=>{
    res.json({
        info:"3000端口返还的数据"
    })
})

app.listen(3000);


