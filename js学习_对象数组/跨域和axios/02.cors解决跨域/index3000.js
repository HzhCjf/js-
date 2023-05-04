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


