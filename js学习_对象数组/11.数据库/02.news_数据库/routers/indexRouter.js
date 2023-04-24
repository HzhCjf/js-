// 新闻列表显示页面 
const express = require("express");
const mongoose = require('mongoose')
const newsModel = require('../newModel.js');


  
  let indexRouter = express.Router();
  
  indexRouter.get("/", async (req, res) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/news")
    let { p } = req.query;
    let perpage = 3; // 每页显示的数量
    let pageNumber = p ? parseInt(p) : 1;
    let skipNum = (pageNumber - 1) * perpage;
  
    // 查询数据库中的所有新闻
    const total = await newsModel.countDocuments({});
    const dataList = await newsModel.find({})
      .skip(skipNum)
      .limit(perpage)
      .lean()
      .exec();
      
    let page = Math.ceil(total / perpage);
    console.log("页码", page);
  
    res.render("index.ejs", {
      resdata: dataList,
      page: page,
    });
  });
  
  indexRouter.get("/detail", async (req, res) => {
    let { id } = req.query;
    try {
      // 根据id查询数据库中的新闻信息
      const detail = await newsModel.findById(id).lean().exec();
      console.log(detail);
      res.render("detail.ejs", {
        detail: detail,
      });
    } catch (err) {
      console.error(err);
    }
  });
  
  module.exports = indexRouter;