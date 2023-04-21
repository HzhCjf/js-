const express = require("express");
let app = express();
const static = express.static;  // 内置中间件
app.use(static("./static"));  // 把 设置的static 目录 映射到 服务器下  localhost:8989 ---> static      ； localhost:8989/a.js
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
    
})



app.listen(8989);