// 4000 端口服务器 
const express = require("express");
const app = express();
app.get("/get",(req,res)=>{
    console.log("4000端口下有请求过来了");
    res.json({
        info:"4000端口返还的数据"
    })
})

app.get("/jsonp",(req,res)=>{
    console.log(req.query);
    let {cb} = req.query;
    // res.send("hello");
    let obj = {
        name:"张三",
        age:20
    }
    // res.send(`myfn('${JSON.stringify(obj)}')`);
    res.send(`${cb}(${JSON.stringify( obj)})`)
})

app.listen(4000);