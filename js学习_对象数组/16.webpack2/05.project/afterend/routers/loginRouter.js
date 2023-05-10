const express = require("express");
let loginRouter = express.Router();
const userModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

loginRouter.get("/checkname", async (req, res) => {
    let { uname } = req.query;
    try {
        // 接收用户名，查询数据库是否有内容；
        let reslut = await userModel.find({ uname });
        console.log(reslut);
        if (reslut.length > 0) {
            res.json({
                info: "用户名正确",
                status: 1
            })
        } else {
            res.json({
                info: "用户名不正确",
                status: 2
            })
        }
    } catch (err) {
        res.json({
            info: "错误",
            status: 0,
            err
        })
    }



})


// 校验用户名和密码的位置 
loginRouter.post("/checkuser", async (req, res) => {
    // 接收post过来的参数 ；
    // console.log(req.body);
    // userModel.find(req.body)
    let { uname, pwd } = req.body;
    try {
        let reslut = await userModel.find({ uname, pwd: md5(pwd) });
        if (reslut.length > 0) {
            // 登录成功 ，签发token ： jsonwebtoken
            // 1.payload : 明文参数  2. 密码 ，根据密码生成加密字符串 3。过期时间 
            let token = jwt.sign({ myname: "hello" }, "mytoken", { expiresIn: "2h" });

            res.json({
                info: "用户名且密码正确",
                status: 1,
                token
            })
        } else {
            res.json({
                info: "用户名或者密码错误",
                status: 2
            })
        }
    } catch (err) {
        res.json({
            info: "错误",
            status: 0
        })
    }


})


module.exports = loginRouter;