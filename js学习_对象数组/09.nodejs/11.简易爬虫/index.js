// 简易爬虫：爬取别人服务器的数据
// http  和  https 
const http = require("http");
const fs = require("fs");
let weburl = "http://www.atguigu.com/";

const cheerio = require("cheerio");  // 类似于 jquery的操作 可以获取dom结构；第三方模块 ，需要安装 ：npm i cheerio 


http.get(weburl,req=>{  // 数据 通过流的形式传递的；
    // 监听流的数据
    let str = "";
    req.on("data",chunk=>{
        str += chunk;
    })
    // 数据获取完毕的时候
    req.on("end",()=>{
        console.log(str);
        // fs.writeFileSync("copy.html",str);
        // let $ = cheerio.load(str);
        let resarr = [];
        $(".con .rr a").each(function(key,item){
            // console.log($(item).text());
            resarr.push({
                id:(key+1),
                title:$(item).text()
            })
        })
        // console.log(resarr);
        fs.writeFileSync("./news.json",JSON.stringify(resarr));
    })

});