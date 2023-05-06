// 3000端口服务器 
// 服务器代理 ： vue react 使用的方式 
const express = require("express");
const static = express.static;
const axios = require("axios");
// import axios from "axios";
const app = express();
app.use(static("./static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/get", async (req, res) => {
    let {data} = await axios.get("http://localhost:4000/get");
    // setTimeout(() => {
        res.json(data);
    // }, 2000);

})

app.get("/get2", (req, res) => {
    // setTimeout(() => {
        res.json({
            info: "3000端口下的数据222"
        })
    // }, 2000);

})

app.listen(3000);


// 判断是客户端还是 服务端：判断异步就可以了 
// nodejs ： process  global
// 前端 ： window document

