// 4000 端口服务器 
const express = require("express");
const app = express();
app.get("/get",(req,res)=>{
    // 利用后端设置 返还头部字段解决跨域问题 ；
    res.setHeader("Access-Control-Allow-Origin","*");
    console.log("4000端口下有请求过来了");
    res.json({
        info:"4000端口返还的数据"
    })
})


app.listen(4000);