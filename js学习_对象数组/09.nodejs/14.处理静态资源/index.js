const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("./data/mime.json");
let server = http.createServer((req, res) => {
    console.log(req.url);
    let { pathname } = url.parse(req.url, true);
    if (pathname === "/") {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        let data = fs.readFileSync("./views/index.html");
        res.write(data);
    } else if (pathname === "/product") {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        let data = fs.readFileSync("./views/product.html");
        res.write(data);
    } else {
        // console.log(req.url);
        // 获取静态资源的后缀 ，根据后缀加载对应的content-type
        let extname = path.extname(req.url);
        console.log(extname);
        // 设置头部
        res.setHeader("Content-Type", mime[extname]);
        // 读取文件内容 写入到页面中去；
        let resdata = fs.readFileSync("./views/" + req.url);
        res.write(resdata);
    }
    res.end();
})

server.listen(8989);