// fs内置模块 ：  fs （file system 文件系统 ，操作文件和目录的）;

// 一、文件操作  ： 增、删、改、查 
// 所有的文件操作 都会有2种形式 ：1.同步文件操作 ，所有的同步后都有sync修饰符  2.异步文件操作 ： 没有sync修饰符 ，但是 一定会有回调函数 ；
// 引入内置模块 fs
const fs = require("fs");

// 1.创建一个文件 

// 同步创建 
// let obj = {name:"123",age:20};
// try{
//     fs.writeFileSync("./data.json",JSON.stringify(obj));
//     console.log("写入成功");
// }catch(err){
//     console.log("err",err);
// }

// 异步创建文件 
// fs.writeFile("./users.json",JSON.stringify(["张安","李四","王五"]),function(err){
//     if(err){
//         return console.log(err);
//     }
//     console.log("写入成功");
// })

// 2.读取文件 
// 同步读取  ；
// try{
//     let data = fs.readFileSync("./data.json","utf-8");
//     console.log( data);
//     let res = JSON.parse(data);
//     console.log(res);
// }catch(err){
//     console.log(err);
// }

// 异步读取 
// fs.readFile("./users.json", "utf-8", (err, data) => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(data);
//     let arr = JSON.parse(data);
//     console.log(arr)
// })

