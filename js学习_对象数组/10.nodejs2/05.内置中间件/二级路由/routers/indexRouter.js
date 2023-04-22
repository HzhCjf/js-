// 以index作为前缀的路由地址 
// http://localhost:8989/index/index 
// http://localhost:8989/index/product
// http://localhost:8989/index/users 

const express = require("express");
let indexRouter = express.Router();

indexRouter.get("/index",(req,res)=>{
    res.send("<h1>index下的主页</h1>");
})

indexRouter.get("/product",(req,res)=>{
    res.send("<h1>index下的产品页面</h1>");
})

indexRouter.get("/users",(req,res)=>{
    res.send("<h1>index下的用户页面</h1>");
})

module.exports = indexRouter;

