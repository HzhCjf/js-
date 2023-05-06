const mongoose = require("../connect");
let schema = mongoose.Schema({
    username:String,
    message:String,
    replay:Array
})

let model = mongoose.model("messages",schema);
module.exports = model;


// pid  

/* 
id  username   messaage  pid
1   张三         留言一    0
2   李四        留言二     0
3               回复一     1
4               回复二     1
5                回复一    2
6             回复下的回复  3



*/