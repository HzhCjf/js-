const express = require("express");
const bodyParser = require("body-parser");
const model = require("./models");
let app = express();
const static = express.static;
app.use(static("./static"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.post("/addmessage", async (req, res) => {
    // 获取前端发送的数据，添加到数据库；
    console.log(req.body);
    let { username, message } = req.body;
    try {
        await model.create({
            username,
            message,
            replay: []
        })
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

app.get("/getmessage", async (req, res) => {
    try {
        let messagedata = await model.find();
        res.json({
            info: "获取成功",
            status: 1,
            messagedata
        })
    } catch (err) {
        res.json({
            info: "获取失败",
            status: 0,
            err
        })
    }
})


app.delete("/delmessage", async (req, res) => {
    let { _id } = req.query;
    /* 
    id   usernmae  isdelete 
    1     zhangsan    1
    2       lisi      1 
    3       wangwu    1
    4      wnagliu    0
    
    */

    try {
        console.log(_id);
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

app.put("/updateReplay", async (req, res) => {
    console.log(req.body);
    let { _id, reaplystr } = req.body;
    try {
        // let [{ replay: replayarr }] = await model.find({ _id });
        // // console.log(typeof replayarr);
        // replayarr.push(reaplystr);
        // // console.log(replayarr);
        // await model.updateOne({ _id }, { $set: { replay: replayarr } });
        await model.updateOne({ _id }, { $push: { replay: reaplystr } });
        res.json({
            info: "成功",
            status: 1
        })
    } catch (err) {
        res.json({
            info: "失败",
            status: 0,
            err
        })
    }



})

app.listen(8989);