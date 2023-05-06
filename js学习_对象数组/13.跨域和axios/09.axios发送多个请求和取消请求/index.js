// 3000端口服务器 
// 服务器代理 ： vue react 使用的方式 
const express = require("express");
const static = express.static;
const app = express();

app.use(static("./static"));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/get1", (req, res) => {
    setTimeout(() => {
        res.json({
            info: "3000端口下的数据"
        })
    }, 3000);


})


app.get("/get2", (req, res) => {
    setTimeout(() => {
        res.json({
            info: "3000端口下的数据222"
        })
    }, 1000);

})

app.listen(3000);


