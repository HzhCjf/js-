// 4000 端口服务器 
const express = require("express");
const app = express();
app.get("/get",(req,res)=>{
    console.log("4000端口下有请求过来了");
    res.json({
        info:"4000端口返还的数据"
    })
})


app.listen(4000);