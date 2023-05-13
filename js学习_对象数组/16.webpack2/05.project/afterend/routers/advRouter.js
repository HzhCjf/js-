// 处理前端提交过来和 广告有关的数据
const express = require("express");
let advRouter = express.Router();
const advmodel = require("../models/advModel.js");
const fs = require("fs");
let { uploadfile } = require("../util.js");
advRouter.post("/addadv", async (req, res) => {
    // 入库处理 ；
    try {
        let uploadData = await uploadfile(req);
        uploadData.addTime = new Date().toLocaleDateString();  // 不能使用前端提交的时间 
        console.log(uploadData);
        await advmodel.create(uploadData);
        res.json({
            info: "添加成功",
            status: 1
        })
    } catch (err) {
        // console.log()
        res.json({
            info: "添加失败",
            status: 0,
            err
        })
    }

})


// 获取广告的接口 
advRouter.get("/getadvs", async (req, res) => {

    let { p } = req.query;
    if (typeof p === "undefined") {
        p = 1;  // 当前页码
    }
    let perpage = 3;  // 每页显示的条数

    // 计算总页码数 
    let totaldata = await advmodel.find();
    let totalcount = totaldata.length;  // 数据总条数
    let pageCount = Math.ceil(totalcount / perpage);


    let advdata = await advmodel.find().skip((p - 1) * perpage).limit(perpage);
    res.json({
        advdata,
        pageCount
    })
})

advRouter.patch("/updateAdv", async (req, res) => {
    try {
        let uploadData = await uploadfile(req);
        let _id = uploadData._id;
        delete uploadData._id;
        await advmodel.updateOne({ _id }, { $set: uploadData });
        res.json({
            info: "更新成功",
            status: 1
        })
    } catch (err) {
        res.json({
            info: "更新失败",
            status: 0
        })
    }

})


advRouter.delete("/delAdv", async (req, res) => {
    let { _id, imgurl } = req.query;
    console.log(_id, imgurl);
    try {
        // 1.删除数据
        await advmodel.deleteOne({ _id });
        // 2.删除文件 
        let delurl = process.cwd() + "/" + imgurl;
        if (fs.existsSync(delurl)) {
            fs.unlinkSync(delurl)
        }
        res.json({
            info: "删除成功",
            status: 1
        })
    }catch(err){
        res.json({
            info: "删除失败",
            status: 0,
            err
        })
    }
    
})
module.exports = advRouter;
