// 默认主入口 ，引入目录的时候 会自动加载这个主入口文件；
console.log("index.js");
let a = require("./a.js");

module.exports = {
    a
}