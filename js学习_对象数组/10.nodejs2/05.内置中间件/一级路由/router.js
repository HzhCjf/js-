const express = require("express");
let router = express.Router(); // 内置中间件 

router.get("/",(req,res)=>{
    res.send("<h1>主页</h1>")
})


router.get("/product",(req,res)=>{
    res.send("<h1>产品页面</h1>")
})


router.get("/users",(req,res)=>{
    res.send("<h1>用户页面</h1>")
})

module.exports = router;