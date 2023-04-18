// promisify  : 可以 把异步的文件操作 变成promise对象 ；
const fs = require("fs");
const {promisify} = require("util");  // 内置模块

// fs.writeFile("./users.json",JSON.stringify({name:"hello",age:20}),err=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log("写入成功");
// })

// promisify(fs.writeFile)("./users.json",JSON.stringify({name:"hello222",age:20})).then(()=>{
//     console.log("写入成功");
// })

// promisify(fs.readFile)("./users.json","utf-8").then(res=>{
//     console.log(res);
// })

// (async function(){
//     let data = await promisify(fs.readFile)("./users.json","utf-8");
//     console.log(data);
// })()