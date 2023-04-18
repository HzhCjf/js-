// 目录操作 ： 目录是一个容器 ；
// 基于 内置 fs 模块 
const fs = require("fs");


// 1.创建一个目录  
// 异步创建目录
// fs.mkdir("./mydir",err=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log("创建成功");
// })

// 同步创建一个目录
// try{
//     fs.mkdirSync("./mydir2");
//     console.log("创建成功");
// }catch(err){
//     console.log(err);
// }


// 2.删除一个目录 : 只能删除空目录
// 异步删除一个目录
// fs.rmdir("./mydir",err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("删除成功");
// })

// 同步删除 
// try{
//     fs.rmdirSync("./mytest")
//     console.log("删除成功");
// }catch(err){
//     console.log(err);
// }

// 3.读取目录 
// 异步读取 
// fs.readdir("./",(err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(data);
// })

// 同步读取目录
// try{
//     let data = fs.readdirSync("./");
//     console.log(data);
// }catch(err){
//     console.log(err);
// }

// 4.修改目录名称  
// 异步修改 
// fs.rename("mytest","mytest1",err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("修改成功");
// });

// 同步
// try{
//     fs.renameSync("mytest1","mytest2");
//     console.log("修改成功");
// }catch(err){
//     console.log(err);
// }


// 5.判断目录是否存在 
// console.log( fs.existsSync("./mytest3"));
// try{
//     if(!fs.existsSync("uploads")){
//         fs.mkdirSync("uploads");
//         console.log("创建成功")
//     }else{
//         console.log('已经创建了');
//     }
// }catch(err){
//     console.log(err);
// }

// 6.判断一个路径是否是一个目录
// 第一步获取 详细信息 
// let src = "./4.txt";
// let stat = fs.statSync(src);
// //第二步 判断是否是一个目录
// console.log( stat.isDirectory());




