const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let model = require("./models");
app.use(bodyParser.urlencoded({ extended: true }));
const static = express.static;
app.use(static("./static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.post("/adduser", async (req, res) => {
    console.log(req.body);
    let { username, age, gender } = req.body;
    try {
        let obj = {
            username,
            age: Number(age),
            gender
        }
        await model.create(obj);
        res.json({
            info: "添加成功",
            status: 1
        })
    } catch (err) {
        res.json({
            info: "添加失败",
            status: 0,
            err
        })
    }

})

app.get("/getusers", async (req, res) => {
    let { sort } = req.query;
    try {
        let reslut;
        if (sort) {
            reslut = await model.find().sort({age:sort});
        } else {
            reslut = await model.find();
        }
        res.json({
            info: "成功",
            status: 1,
            data: reslut
        })
    } catch (err) {
        res.json({
            info: "失败",
            status: 0,
            err
        })
    }
})


app.get("/deluser", async (req, res) => {
    let { _id } = req.query;
    try {
        await model.deleteOne({ _id });
        res.json({
            info: "删除成功",
            status: 1
        })
    } catch (err) {
        res.json({
            info: "删除失败",
            status: 0,
            err
        })
    }
})



app.listen(8989);