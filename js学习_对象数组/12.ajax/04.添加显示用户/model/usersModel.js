// 创建新闻列表的模型
const mongoose = require("../connect");
let schema = mongoose.Schema({
    username:String,
    age:Number
})

let newsModel = mongoose.model("users",schema);
module.exports = newsModel;