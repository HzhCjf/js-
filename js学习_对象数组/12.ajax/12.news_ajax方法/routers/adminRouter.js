// 关于新闻列表的后台管理系统操作 ，管理新闻页面
const express = require("express");
let adminRouter = express.Router();
const newsModel = require("../models/newsModel");
// console.log(__dirname);
// console.log(process.cwd()+"/img")
let { fileParse } = require("../common");
const fs = require("fs");

adminRouter.get("/addnews", (req, res) => {
    res.sendFile(process.cwd() + "/views/addnews.html");
})

adminRouter.post("/post", async (req, res) => {
    try {
        let obj = await fileParse(req);
        let reslut = await newsModel.create(obj);
        res.json({
            info: "添加成功",
            status: 1
        })
        // res.redirect("/index");  // ajax请求的不能跳转，会被ajax阻止掉；
    } catch (err) {
        res.send(err);
    }
})


module.exports = adminRouter;