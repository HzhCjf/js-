// webpack的配置文件 ，执行指令的时候会自动读取这个文件里的配置项；
const path = require("path");

module.exports = {
    mode: "development",
    entry:path.resolve(__dirname,"./src/index.js"),
    output:{
        path:path.resolve(__dirname,"./lib"),
        filename:"boundle.js"
    }
}



// 作业 ： 1.复习 2.皮肤 3.弹幕 