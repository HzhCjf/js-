const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.get("/get",(req,res)=>{
    setTimeout(() => {
        res.json({
            info:"返还了数据",
            status:1
        })
    }, 3000);
})

app.listen(8989);