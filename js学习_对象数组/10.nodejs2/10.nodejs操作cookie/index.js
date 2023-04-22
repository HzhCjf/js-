const express = require("express");
const cookieParser = require("cookie-parser");
let app = express();
// 操作cookie 需要借助 第三方中间件 ： cookie-parser
app.use(cookieParser());

app.get("/setCookie", (req, res) => {
    res.cookie("myname11", "zhangsan", {
        maxAge: 3600 * 1000, // 单位是毫秒 ；
        httpOnly:true  // 设置 cookie只能服务端操作
    })
    res.send("设置cookie");
})

app.get("/getCookie", (req, res) => {
    console.log(req.cookies);
    // res.send("获取cookie");
    res.json(req.cookies);
})


app.get("/delCookie", (req, res) => {
    res.clearCookie("myname11");
    res.send("删除cookie");
})

app.listen(8989);