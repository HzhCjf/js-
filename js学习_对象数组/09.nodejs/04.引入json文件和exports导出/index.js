/* 
commonjs规范 
1.文件模块
2.目录模块
3.特殊目录模块 
4.引入json后缀文件 ，json格式的文件

*/

// 一、可以直接引入 json文件 
// let data = require("./data.json");  // 自动把json 转成 对象或者数组
// console.log(data);
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.setHeader("Content-Type","text/html;charset=utf-8");
//     var ul = "<ul>";
//     data.forEach(item=>{
//         ul += `<li>姓名是${item.name};年龄是${item.age}</li>`;
//     })
//     ul += "</ul>";
//     res.write(ul);
//     res.end();
// })
// server.listen(8989);


// 二、可以通过 exports导出变量  . 注意 只能通过引用关系 改变 module.exports的值 达到 导出的效果 。
// let obj = require("./a.js");
// console.log(obj);


// 三、接收 querystring 参数 
const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url); // 可以获取 地址栏传递过来的地址；
    res.write("hello");
    res.end();
})
server.listen(8989);