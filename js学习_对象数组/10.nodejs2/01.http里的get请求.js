// get 请求 
// http可以发送请求 ： 请求方法 1.get  2.post 
// put 、delete 、head 、options  。。

// 浏览器发送get请求方式 
/* 
1.地址栏直接访问服务器 是一个get请求  
2.通过 a标签   .
3.页面加载的各种资源 ； 引入 js  、css 、加载各种图片 音乐  视频 ...
4.通过form表单发送get请求
5.ajax发送get请求 （后面讲）;
// get请求 特性 ： 
    1. 参数会通过地址栏携带 
    2. 明文传输
    3. get 大小 2k左右
    4. get请求 有时候会被浏览器缓存 ；携带时间戳参数 

*/

const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html;charset=utf-8");
    let {pathname,query} = url.parse(req.url,true);
    if(pathname==="/"){
        // res.end("<a href='/user'>点击当前路由</a>");
        let data = fs.readFileSync("./01.views/index.html");
        res.end(data);
    }else if(pathname==="/user"){
        // res.end("<img src='/1.png' />");
        res.end("hello");
    }else if(pathname==="/get"){
        console.log("有get请求过来了",query);
        res.end("收到了");
    }
})
server.listen(8989);