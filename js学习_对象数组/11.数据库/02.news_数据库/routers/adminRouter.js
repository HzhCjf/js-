// 关于新闻列表的后台管理系统操作 ，管理新闻页面
const express = require("express");
let adminRouter = express.Router();
const newsModel = require("../models/newsModel");

const fs = require("fs");

adminRouter.get("/addnews", (req, res) => {
    res.sendFile(process.cwd() + "/views/addnews.html");
})

adminRouter.post("/post", async (req, res) => {
    try {
            let reslut = await newsModel.create(req.body);
            res.redirect("/index");
    } catch (err) {
        res.send(err);
    }
    // res.send("接收成功");
})


module.exports = adminRouter;