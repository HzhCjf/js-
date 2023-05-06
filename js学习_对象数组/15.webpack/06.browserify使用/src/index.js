// browserify 模块  : 把 nodejs里的commonjs 语法 转成浏览器可以识别的语法 ；
// 模块化 ： 1.commonjs 规范 (nodejs的语法 )  2. ESM  （前端js的语法）
// import a from './a.js';
// console.log(a);
let obj = require("./a.js");
console.log(obj);