// 通过http构建服务器 
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const mime = require("./data/mime.json");
let newsData = require("./data/news.json");
const server = http.createServer((req, res) => {
    let { pathname, query: { id, p } } = url.parse(req.url, true);
    if (pathname === "/") {

        // 分页 ： 已知  1.每页显示的条数 perpage = 3    2.数据的总条数  total= 8
        // 动态显示页码  : let page =  ceil(  total/perpage)
        let copynewsData = newsData.map(item => item);

        let total = copynewsData.length;  // 数据的总条数
        let perpage = 3;   // 每页显示的条数
        let page = Math.ceil(total / perpage);
        console.log("页码", page);

        /* 
            页码 已知  

            每页显示的内容；
            页码 ： 1  每页显示3条  
            // 
            let resdata = copynewsData.splice(0,3);

            // 页码 ：2  每页显示 3条 
            let resdata = copynewsData.splice(3,3);


             // 页码 ：3  每页显示 3条 
            let resdata = copynewsData.splice(6,3);

            // 页码 ： n  每页显示 perpage 条
            let resdata = copynewsData.splice((n-1)*perpage,perpage);
        
        */
        let nowpage;
        if (typeof p === "undefined") {
            nowpage = 1;
        } else {
            nowpage = p;
        }

        let resdata = copynewsData.splice((nowpage-1)*perpage,perpage);
        console.log("当前页的数据是",resdata);



        // 加载新闻列表
        let data = fs.readFileSync("./views/index.html");

        // 新闻列表需要根据 newsData显示动态数据；
        // 通过正则查找 ul  组装 html 替换掉ul里的内容

        let reg = /<ul class="news-list">[\s\S]+<\/ul>/g;

        let str = '<ul class="news-list">';

        resdata.forEach(item => {
            str += `<li class="news">
            <a href="javascript:;">
                <img src="./img/img.png" alt="">
            </a>
            <div class="newsContainer">
                <h3>
                    <a href="/detail?id=${item.id}" class="title">${item.title}</a>
                </h3>
                <div class="info">
                    <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                    <!-- <span class="line"></span> -->
                    <span class="time">| &nbsp;&nbsp;1小时前</span>
                </div>
            </div>
        </li>`
        })

        str += '</ul>';

        str += `<div class="pagination">
        <a href="javascript:;" class="prev">⌜</a>`
        for (let i = 1; i <= page; i++) {
            str += `<a href="/?p=${i}">${i}</a>`
        }
        str += `<a href="javascript:;" class="next">⌝</a>
    </div>`


        data = data.toString().replace(reg, str);

        res.write(data);
    } else if (pathname === "/detail") {

        // 接收id 数据
        // console.log("数据id是：",id);
        // 通过id 查找 数据里的内容
        let detail = newsData.find(item => item.id == id);
        console.log(detail);
        // 加载详细页面
        let detailData = fs.readFileSync("./views/detail.html");
        let reg = /<h1 class="title">[\s\S]+<\/h1>/g;
        detailData = detailData.toString().replace(reg, `<h1 class="title">${detail.title}</h1>`)

        let reg2 = /<p class="content">[\d\D]+<\/p>/g;
        detailData = detailData.replace(reg2, `<p class="content">${detail.content}</p>`)
        res.write(detailData);
    } else {
        if (req.url !== "/favicon.ico") {
            // 处理第三方资源
            console.log(req.url);
            // 设置头部 
            let extname = path.extname(req.url);
            res.setHeader("Content-Type", mime[extname]);
            // 读取资源 写入到html里；
            let resdata = fs.readFileSync("." + req.url);
            res.write(resdata);
        }

    }
    res.end();
})

server.listen(8989);