// 以admin作为前缀的路由地址 
// http://localhost:8989/admin/index 
// http://localhost:8989/admin/product
// http://localhost:8989/admin/users 

const express = require("express");
let adminRouter = express.Router();

adminRouter.get("/index",(req,res)=>{
    res.send("<h1>admin下的主页</h1>");
})

adminRouter.get("/product",(req,res)=>{
    res.send("<h1>admin下的产品页面</h1>");
})

adminRouter.get("/users",(req,res)=>{
    res.send("<h1>admin下的用户页面</h1>");
})

module.exports = adminRouter;

