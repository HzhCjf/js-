const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url);
    // res.statusCode = 404;  // 设置返还状态码为404；
    res.statusCode = 302;  // 状态码是 302 临时重定向状态 
    // 浏览器 收到 302状态后会查找返还头部里的 location字段进行跳转操作
    // 设置返还头部信息 
    // res.setHeader("location","http://www.baidu.com");
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.write("<h1>hello</h1>")
    res.end();
})
server.listen(8989);


// 查看 通过 浏览器 里的network查看  
/* 
状态码 ： 
    1xx : 和 http 等待状态有关的状态码 ；常连接 
    2xx : 和成功有关 
        200 ： 返还成功
        201 ： 等待更新 
        204 ： 头部返还成功
    3xx : 和重定向（redirect，跳转）有关的状态码 
        301： 永久重定向 
        302：临时重定向 
        304: 读取缓存信息 
    4xx: 客户端错误
        404 ： 资源找不到 
        403 ： 没有资源 ，没有原因；
    5xx: 服务器错误 
        501： 服务器内部错误 
        503 ： 并发处理不过来 



*/