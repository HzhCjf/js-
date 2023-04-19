// 流:  stream,在node.js里传递数据或者读取数据的时候,可以通过流的形式读取或者传递
// 流在node.js里会把大文件或者大数据分割成小文件或者数据,移除读取或者写入,这样避免内容溢出,节约性能
// 流会分割成64k的小文件

const fs = require('fs')

// 读取文件
// 内存溢出,内存爆仓
// let res = fs.readFileSync('../08.简易文件管理器/mytest/4.txt')
// console.log(res);




// 通过流的方式读取文件 
// let rs =  fs.createReadStream("../08.简易文件管理器/mytest/4.txt");  // 创建一个可读流；
// // 1.监听流的 chunk 小块；
// let count = 0
// rs.on("data",chunk=>{
//     count++;
//     console.log(count);
//     console.log(chunk.toString());
// })



// 创建一个 65k文件 
// let b = Buffer.alloc(65*1024);
// fs.writeFileSync("65",b);




// let rs = fs.createReadStream("../08.简易文件管理器/mytest/4.txt");
// let count = 0;
// rs.on("data",chunk=>{
//     count++;
//     console.log(count);
// })
// let str = "";
// rs.on("data",chunk=>{
//     console.log(chunk);
//     str += chunk;
// })

// console.log(str);




// 2.监听流数据读取结束的事件 
// let rs = fs.createReadStream("../08.简易文件管理器/mytest/4.txt");
// let str
// rs.on("end",()=>{
//     console.log(str);
// })




// 通过流的方式复制文件 

let rs = fs.createReadStream("../10.流/65");
let ws = fs.createWriteStream("../my.txt");
rs.pipe(ws);