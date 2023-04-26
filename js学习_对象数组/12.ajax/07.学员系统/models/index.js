const mongoose = require("../connect");
let schema = mongoose.Schema({
    username:String,
    age:Number,
    gender:String
})

let model = mongoose.model("students",schema);
module.exports = model;