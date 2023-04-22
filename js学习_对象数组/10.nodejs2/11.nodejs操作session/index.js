// session : 会话控制 
// session 是存在 服务端 ； cookie存在客户端 ；session 比cookie更安全
// session 必须要借助cookie 来存 sessionid ，如果客户端把cookie禁用 ，那么session也不能使用了；
const express = require("express");
let app = express();
// 借助第三方中间件 ： express-session;
const session = require("express-session");  // 安装 ；

app.use(session({
    name:"mysession",
    resave:true,  // session 会不会重新被创建
    saveUninitialized:true,// cookie 会不会被重新创建 
    secret:"mysecret" ,// 签名 
    cookie:{  // 存放sessionid的cookie设置 ；
        maxAge:3600*1000,
        httpOnly:true
    }
}))

// jwt  : json web token  权限认证；

// 一 、设置 
app.get("/setSession",(req,res)=>{
    req.session.myname = "hello";  // 设置 session
    res.send("设置session");
})

// 二、获取session
app.get("/getSession",(req,res)=>{
    console.log(req.session.myname);
    res.send("名字是"+req.session.myname);
})

// 三、删除session
app.get("/delSession",(req,res)=>{
    req.session.destroy();  // 删除所有session
    res.send("删除session1122");
})

app.listen(8989);

// 注意： 服务器重启了 ，那么session的值会被置空；