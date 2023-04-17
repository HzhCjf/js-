// 一、目录模块 ： 一个目录就是一个模块 
// 目录模块里有多个文件，会有一个单入口 ，主入口 ；默认前提下 主入口文件名是index.js
// 引入 目录模块 : 只需要 引入到 目录路径可以了 ，注意 ./不能省略；

// 修改目录模块里的主入口 ； 
// 在目录模块里创建一个 package.json文件 
// 二、 通过指令快速创建package.json文件 ： npm init  修改 main选项可以修改主入口文件 ；
    // 1. 所有选项都选默认项  ： npm init -y
    // 2. 外层目录不能是中文 ： package的名字不能是中文 ；

// let obj = require("./mymoduleA/index.js");
// console.log(obj);

let obj = require("./mymoduleA");  // 会自动查找 目录下的index.js主入口
console.log(obj);