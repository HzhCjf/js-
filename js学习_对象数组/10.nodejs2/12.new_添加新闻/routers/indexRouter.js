// 新闻列表显示页面 
const express = require("express");
let newsData = require("../data/news.json");

let indexRouter = express.Router();

indexRouter.get("/",(req,res)=>{
    let { p } = req.query;
    // 分页 ： 已知  1.每页显示的条数 perpage = 3    2.数据的总条数  total= 8
    // 动态显示页码  : let page =  ceil(  total/perpage)
    let copynewsData = newsData.map(item => item);
    let total = copynewsData.length;  // 数据的总条数
    let perpage = 3;   // 每页显示的条数
    let page = Math.ceil(total / perpage);
    console.log("页码", page);
    let nowpage;
    if (typeof p === "undefined") {
        nowpage = 1;
    } else {
        nowpage = p;
    }

    let resdata = copynewsData.splice((nowpage - 1) * perpage, perpage);
    console.log("当前页的数据是", resdata);
    res.render("index.ejs",{resdata,page});

})


indexRouter.get("/detail",(req,res)=>{
    let {id} = req.query;
    // 通过id 查找 数据里的内容
    let detail = newsData.find(item => item.id == id);
    console.log(detail);
    res.render("detail.ejs",{detail});
})



module.exports = indexRouter;