const express = require("express");
let userRouter = express.Router();
const { uploadfile } = require("../util");
const md5 = require("md5");
const userModel = require("../models/usersModel");

// http://localhost:8080/api/1.png  ---> http://localhot:8989/1.png


userRouter.get("/test", (req, res) => {
    res.json({
        info: "测试数据",
        status: 1
    })
})

userRouter.post("/adduser", async (req, res) => {
    try {
        let obj = await uploadfile(req);
        obj.addTime = new Date().getFullYear();
        obj.pwd = md5(obj.pwd);
        await userModel.create(obj);
        res.json({
            info: "添加成功",
            status: 1
        })
    }catch(err){
        res.json({
            info:"添加失败",
            status:0
        })
    }
   
})

userRouter.get("/getusers",async (req,res)=>{
    let perpage = 5; // 每页显示的条数
    let p = 1;  // 当前页面，默认在第一页 
    let users = await userModel.find().skip((p-1)*perpage).limit(perpage);
    res.json(users);  // 通过ajax返还给前端；
})

module.exports = userRouter;