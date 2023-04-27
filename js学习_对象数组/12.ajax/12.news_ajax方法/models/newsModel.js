// 创建新闻列表的模型
const mongoose = require("../connect");
let schema = mongoose.Schema({
    title:String,
    content:String,
    newsimg:String
})

let newsModel = mongoose.model("news",schema);
module.exports = newsModel;