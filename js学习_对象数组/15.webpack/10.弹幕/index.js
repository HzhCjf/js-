const express = require("express");
const io = require("socket.io");
const http = require("http");
let app = express();
const static = express.static;
app.use(static("./static"));
let server = http.createServer(app);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index2.html");
})
let socket = io(server);
socket.on("connection",ws=>{
    console.log("有连接过来了");

    ws.on("sendval",val=>{
        ws.broadcast.emit("sendval",val);
    })


    ws.on("dis",data=>{
        console.log(data);
        ws.broadcast.emit("senddis",data);  // 广播给其他的页面
    })
})

server.listen(8989);