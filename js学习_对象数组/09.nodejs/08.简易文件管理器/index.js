// 显示文件  ： 1.显示文件夹，显示文件 2.删除文件或者目录的功能 ；
const http = require("http");
const fs = require("fs");
const url = require("url");
// 获取删除文件夹和文件的函数
const removeDir = require("./removedir.js");
const server = http.createServer((req, res) => {
    // 进行头部设置,主要为了不乱码
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    // 获取url里面的参数
    let { query: { dirpath, delpath, path }, pathname } = url.parse(req.url, true);




    // 如果在根目录下
    if (pathname === "/") {
        // 读取同级目录的文件内容 
        let pathurl;
        if (dirpath) {
            pathurl = dirpath; // 读取dirpath里的内容,就是所点击的文件夹的内容；
        } else {
            pathurl = ".";  // 读取同级目录的所有内容
        }

        // 删除逻辑 ：接收 delpath
        if (delpath) {
            // 需要删除文件或者目录
            // 判断这个路径是 目录路径 还是文件路径 ；
            // 这个路径存在 ；
            if (fs.existsSync(delpath)) {
                // 文件或者目录存在；存在就删除 ，避免重复删除；
                // 判断路径是文件或者是目录 ；
                let stat = fs.statSync(delpath);
                if (stat.isFile()) {
                    // 如果是文件就直接删除
                    fs.unlinkSync(delpath);
                } else {
                    // 是文件夹就利用函数删除
                    removeDir(delpath);
                }
            }
        }




        // 为文件名前面拼接./
        let arr = fs.readdirSync(pathurl + "/");  // ./mytest/
        // 设置表格
        let str = "<table>";
        str += "<tr><th>文件名</th><th>操作</th></tr>";
        // 循环获取到的文件名
        arr.forEach(item => {
            // 拼接路径
            let resurl = pathurl + "/" + item;
            // 判断是文件或者是目录
            let stat = fs.statSync(resurl);
            if (stat.isFile()) {
                // 是一个文件
                str += `<tr><td><a href="/show?path=${resurl}">${item}</a></td><td><a href='/?delpath=${resurl}'>删除</a></td></tr>`
            } else {
                // 是一个目录
                // 点击a标签的时候  还是跳转到当前地址 ，但是需要携带参数；
                str += `<tr><td><a href="/?dirpath=${resurl}">${item}</a></td><td><a href='/?delpath=${resurl}'>删除</a></td></tr>`
            }
        })
        str += "</table>";

        res.write(str);
        res.end();
    } else if (pathname === "/show") {
        // 点击文件时path会变成文件的路径,然后读取文件内容
        let data = fs.readFileSync(path);
        // 渲染文件内容
        res.write(data);
        res.end();
    }

})

server.listen(8080);