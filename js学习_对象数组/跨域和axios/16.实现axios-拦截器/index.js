// 3000端口服务器 
// 服务器代理 ： vue react 使用的方式 
const express = require("express");
const bodyParser = require("body-parser");
const static = express.static;
// import axios from "axios";
const app = express();
app.use(static("./static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/get", async (req, res) => {
    res.json({
        info: "3000端口数据",
        status: 1
    })

})

app.get("/get2", (req, res) => {
    // setTimeout(() => {
    res.json({
        info: "3000端口下的数据222"
    })
    // }, 2000);

})

app.post("/post",(req,res)=>{
    console.log("有post数据过来了",req.body);
    res.json({
        info:"返还的post数据",
        status:1
    })
})

app.listen(3000);



