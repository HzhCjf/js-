// 拦截器（interceptor） ： 拦截器axios ： 1.请求拦截器 2.返还拦截器 

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
    }, 2000);


})


app.get("/get2", (req, res) => {
    setTimeout(() => {
        res.json({
            info: "3000端口下的数据222"
        })
    }, 1000);

})

app.listen(3000);
