const express = require("express");
const fs = require("fs");
const path = require("path");
let newsData = require("./data/news.json");
const static = express.static;
let app = express();
app.set("views",path.join(__dirname,"./views"))
app.set("view engin","ejs");
app.use(static("./img"));
app.get("/", (req, res) => {
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

app.get("/detail", (req, res) => {
    let {id} = req.query;
    // 通过id 查找 数据里的内容
    let detail = newsData.find(item => item.id == id);
    console.log(detail);
    res.render("detail.ejs",{detail});
})

app.listen(8989);

