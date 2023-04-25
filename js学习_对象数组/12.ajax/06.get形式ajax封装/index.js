const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/get",(req,res)=>{
    console.log(req.query);
    res.json({
        info:"get返还成功的数据",
        status:1
    })
})

app.get("/get2",(req,res)=>{
    res.json({
        info:"get返还成功的数据22222",
        status:1
    })
})

app.listen(8989);