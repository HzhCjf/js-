const express = require("express");
const http = require("http");
const io = require("socket.io");
let app = express();
const static = express.static;
app.use(static("./static"));
let server = http.createServer(app);
const socket = io(server);  // 利用 socket 监听 服务的变化 ；
socket.on("connection",ws=>{  // 有websocket 连接过来；
    console.log("有websocket连接过来");
    ws.on("myevent",e=>{
        console.log(e);
        // 发送给当前；
        ws.emit("mymessage",{name:"张三"});
        // 广播给其他的 连接 ；
        // 广播是除了自己之外的连接发送数据；
        ws.broadcast.emit("mymessage",{name:"李四"});

    })

})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})


server.listen(8989);