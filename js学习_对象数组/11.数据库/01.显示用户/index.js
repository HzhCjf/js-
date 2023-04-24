const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/myusers").then(() => {
    console.log("数据库连接成功")
}).catch(err => {
    console.log("数据库连接失败", err);
})
// 第二步：创建骨架
let schema = mongoose.Schema({
    username: String,
    age: Number,
})
let model = mongoose.model("myusers", schema);

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/adduser", (req, res) => {
    res.sendFile(__dirname + "/views/adduser.html");
})

app.post("/postuser", async (req, res) => {
    // console.log(req.body);
    let { username, age } = req.body
    let obj = {
        username,
        age: Number(age)
    }
    try {
        let reslut = await model.create(obj);
        res.send("添加成功");
    } catch (err) {
        console.log(err);
    }
})


app.get("/showusers", async (req, res) => {
    let users = await model.find();
    let str = "<ul>";
    users.forEach(item=>{
        str += `<li>姓名是${item.username} 年龄是${item.age}</li>`
    })
    str += "</ul>";
    res.send(str);
})


app.listen(8989);

// 作业 ： 1.复习 2.新闻列表换成数据库存储；