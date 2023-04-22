// 模板引擎 ： 
// 通过 nodejs 把数据和模板推送到前端  ： ssr （server send render） ； seo 搜索引擎优化 ；
const express = require("express");
const path = require("path")
const app = express();
// 1.设置 模板所在的位置 ；
app.set("views",path.join(__dirname,"./views"));
// 2.把html 后缀修改成 ejs 后缀 ；
// 3.设置express的模板引擎种类 ；
// 4.需要安装 对应的模板引擎 
app.set("view engin","ejs");


app.get("/",(req,res)=>{
    let users = [{
        name: "张三1",
        age: 20
    }, {
        name: "张三2",
        age: 23
    }, {
        name: "张三3",
        age: 21
    }]
    // res.sendFile(__dirname+"/views/index.html");
    res.render("list.ejs",{title:"我是ejs推送的标题",users});
})

app.listen(8989);