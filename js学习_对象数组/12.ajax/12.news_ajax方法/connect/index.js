// 连接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mynews").then(()=>{
    console.log("数据库连接成功");
}).catch(err=>{
    console.log("错误",err);
})
module.exports = mongoose;

