const express = require("express");
let app = express();

app.get("/getdata",(req,res)=>{
    res.json({
        info:"hello8989",
        status:1
    })
})

app.listen(8989);