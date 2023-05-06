const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mymessagedb");
let schema = mongoose.Schema({
    val: String
})
let model = mongoose.model("messages", schema);
const http = require("http");
const io = require("socket.io");
let app = express();
const static = express.static;
app.use(static("./static"));
let server = http.createServer(app);
const socket = io(server);  // 利用 socket 监听 服务的变化 ；
socket.on("connection", async ws => {  // 有websocket 连接过来；
    console.log("有websocket连接过来");
    // 有连接过来的时候 立刻发送事件到前端 ；
    let messagesdata = await model.find();
    ws.emit("getdata",messagesdata);


    ws.on("addmessage", async data => {
        await model.create(data);
        let newdata = await model.find();
        ws.emit("newdata",newdata);
        ws.broadcast.emit("newdata",newdata);
    })

})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})


server.listen(8989);
// 练习 ： 1.聊天  2.一个方块 拖拽 ，可以实时同步  3.一个弹幕 