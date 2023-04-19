// buffer : 缓冲区 ，nodejs里的一种数据格式，使用二进制表示

const fs = require("fs");
// let data =  fs.readFileSync("./1.txt");
// console.log(data);

// let buffer = require("buffer")

// 1.创建一个buffer 
// let b = Buffer.alloc(10,1);
// console.log(b);

// let b = Buffer.alloc(64*1024);
// fs.writeFileSync("64k",b);

// 2.不安全的创建一个buffer
// 快速创建buffer ；直接分配内存空间 ；
// let b = Buffer.allocUnsafe(10);
// console.log(b);


// 3.可以把字符串转成buffer 
// let str = "你好";
// let b =  Buffer.from(str);
// console.log(b);


// 4.把buffer转成字符串 ； buffer.toString();

// let b =Buffer.from([0xe4,0xbd,0xa0,0xe5,0xa5,0xbd]);
// console.log(b);
// console.log(b.toString());
let data = fs.readFileSync("./1.txt");
console.log(data.toString());