// 操作用户的模型 ：对应 users集合 
let mongoose = require("../connect");
let schema = mongoose.Schema({
    uname:String,
    pwd:String,
    newFilename:String,
    addTime:String
})

let userModel = mongoose.model("users",schema);
module.exports = userModel;