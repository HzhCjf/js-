// AMD : require.js  。  CMD ： sea.js

// nodejs 有自己的模块化方案 ，叫 commonjs规范 
// 模块化 是把js 文件 分成各个模块 ，每个模块之间有独立的作用域 防止变量污染


// 模块化方案：
// 1.ESM ： ES6 module
// 2.commonjs 规范 ；
/* 
    1.文件模块  
    2.目录模块
    3.特殊名称的目录模块 
*/

// 一、文件模块 
// 1.引入文件模块 ： require("./文件路径");  注意 ： ./ 一定需要写 ；
// 2.导出变量 ： module.exports = {};
// 3.接收导出的内容  通过返还值 接收
// let res =  require("./a.js");  // 引入a.js文件模块 
// let { c, obj: { myname } } = require("./a.js");
// let fn = require("./b.js");
// // console.log(c);
// // console.log(obj);
// // console.log(res);
// console.log(c, myname);
// fn();


//练习： 有 2 个 文件模块  c 模块和 d 模块 ； d 模块里有一个对象 ，对象里有一个类  和 一个名字  导出到c里 ，c接收 之后 在导出到 index.js里实例化导出的类；

let {myname,Person} = require("./c.js");
// console.log(res);
 let zhangsan = new Person("张三",20);
 console.log(zhangsan);