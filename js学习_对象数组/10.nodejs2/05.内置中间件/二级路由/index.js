const express = require("express");
const adminRouter = require("./routers/adminRouter.js");
const indexRouter = require("./routers/indexRouter.js");
let app = express();

app.get("/admin",(req,res)=>{
    res.redirect("/admin/index");
})

app.get("/index",(req,res)=>{
    res.redirect("/index/index");
})

app.get("/",(req,res)=>{
    res.redirect("/admin/index");
})

// /admin 是路由的前缀；
app.use("/admin",adminRouter);
app.use("/index",indexRouter);



app.listen(8989);