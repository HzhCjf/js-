// 1.获取执行文件的绝对路径 ；
// console.log(__filename); // 魔术变量
// D:\尚硅谷\230215\day22\3.和路径有关模块\index.js

// 2.获取执行文件上层的目录
// console.log(__dirname);

// 3.process 进程 : 获取命令执行的目录 
// console.log(process);
// console.log( process.cwd());
// console.log(__dirname);

// 4.获取node执行的路径 ：process.argv
// console.log(process.argv);  //第一个路径 是 node执行文件的路径 第二个路径 执行文件的路径
// console.log(process.argv[0]);  
// console.log(process.argv0);    // 上面的简写形式

// console.log(process.argv[1]);

// console.log(process.argv);
// if(process.argv[2]==="production"){
//     console.log("执行生产环境的代码");
// }else{
//     console.log("执行开发环境的代码");
// }

// 5.处理路径的内置模块 
const path = require("path");
// 处理且生成一个绝对路径
// let res = path.resolve("./test","../index","index.html");
// // let res = __dirname + "./test"+"../index"+"index.html"
// console.log(res);

// 处理且连接多个路径 
// let res = path.join("./test/mytest","../index","index.html");
// let res = "./test/mytest"+"/../index"+"/index.html"
// console.log(res);

// 获取路径里文件的后缀名
// content-type  : text/html;charset=utf-8s
// let mypath = "./index/mytest/index.html";
// let res = path.extname(mypath);
// console.log(res);

//6. url 处理路径
// const url = require("url");
// let myurl = "http://localhost:8989/mytest?name=zhangsan&age=20";
// let res =  url.parse(myurl,true);
// console.log(res);




