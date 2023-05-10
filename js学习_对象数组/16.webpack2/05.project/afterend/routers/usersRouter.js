const express = require("express");
let userRouter = express.Router();
const { uploadfile } = require("../util");
const fs = require('fs');
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
    } catch (err) {
        res.json({
            info: "添加失败",
            status: 0
        })
    }

})

userRouter.get("/getusers", async (req, res) => {
    let perpage = 5; // 每页显示的条数
    let {p} = req.query;
    if(typeof p === "undefined"){
        p = 1;  // 默认获取第一页数据
    }

    let totalData = await userModel.find();
    let count = totalData.length;  // 数据的总条数

    let totalPage = Math.ceil( count/perpage)  // 总页码  
    console.log("总的页码是:",totalPage);

    let users = await userModel.find().skip((p - 1) * perpage).limit(perpage);
    // setTimeout(() => {
     res.json({users,totalPage});  // 通过ajax返还给前端；
        
    // }, 2000);
})

// 删除数据的接口 
userRouter.delete("/deluser", async (req, res) => {
    let { _id ,newFilename} = req.query;
    try {
        // 查询 当前用户图片的路径 ；
        // let [{newFilename}] = await userModel.find({_id});
        console.log(newFilename);
        let delurl = process.cwd()+"/static/"+newFilename;
        if(fs.existsSync(delurl)){  // 判断 文件是否存在 ，如果存在就删除；
            fs.unlinkSync(delurl);
        }
        await userModel.deleteOne({ _id });
        res.json({
            info: "删除成功",
            status: 1
        })
    } catch (err) {
        res.json({
            info: "删除失败",
            status: 0
        })
    }

})


module.exports = userRouter;