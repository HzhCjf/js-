// nodejs 就是js
// node执行 js  
/* 
1.repl ： 交互式解释器 。类似 浏览器的console 
    -  进入 repl 环境 ：输入 node ；
    - repl 环境下 没有 客户端独有的一些全局变量  window 、document； global、process
    - 退出 repl 环境 ： ctrl + c  ； 按两次 ；
2.通过 命令 
    - 进入 js 所在的目录 输入 ： node 文件名 
    - node  文件路径  （不推荐）

3.构建一个简单的服务器 
    // 启动服务器  ：  node 文件 
    // 访问 ： 1.http://127.0.0.1:端口号  。 只能自己方法自己 
              2. http://localhost: 端口号 。 自己访问自己 
              3. http://ip地址 ： 端口号 。 在一个局域网内别人也可以访问 ；
    // 关闭服务器 ： ctrl + c 按两次；

*/

// 111  ---> console.log(111);
// console.log(111)  ----> console.log(console.log(111));

// let p = new Promise(res=>{
//     setTimeout(() => {
//         res(111);
//     }, 2000);
// })

// p.then(res=>{
//     console.log(res);
// })

// 构建一个node 服务器 ；
const http = require("http");  // 引入一个内置模块 
// 创建一个服务器 
const server = http.createServer((req, res) => {
    // req: request  请求 ，所有浏览器请求到服务器的内容
    // res: response 返还  ,所有服务器到浏览器的内容；
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.write("<h1>hello world你好1111</h1>");  // 返还给浏览器hello world
    res.end(); // 告诉浏览器 返还结束了；
})

server.listen(8989); // 设置端口号 ；


/* 
1.不支持中文 ；中文是乱码 ；
2.一旦修改了 node 文件，node服务器需要重启；
3. 端口建议使用 1024 以上的端口 。 不要使用 chrome的保留端口号 
// https://www.likecs.com/show-307992608.html
4.地址写错了 

*/

