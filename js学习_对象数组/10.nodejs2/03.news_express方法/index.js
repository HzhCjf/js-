const express = require("express");
const { urlencoded } = require("body-parser");
const fs = require("fs");
const path = require("path");
const mime = require("./data/mime.json");

let newsData = require("./data/news.json");

const app = express();
app.use(express.static(path.join(__dirname, 'img')));

app.use(urlencoded({ extended: false }));

// 当用户访问根路径 "/" 时，会动态地构建新闻列表，并加载到网页中。
app.get("/", (req, res) => {
    let copynewsData = newsData.map(item => item);
    let total = copynewsData.length;
    let perpage = 3;
    let page = Math.ceil(total / perpage);

    let nowpage = req.query.p || 1;

    let resdata = copynewsData.splice((nowpage-1)*perpage, perpage);
    console.log("当前页的数据是",resdata);

    // 加载视图
    let data = fs.readFileSync("./views/index.html").toString();
    let reg = /<ul class="news-list">[\s\S]+<\/ul>/g;

    let str = '<ul class="news-list">';
    resdata.forEach(item => {
        str += `<li class="news">
            <a href="javascript:;">
                <img src="img.png" alt="">
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

    str += createPagination(page, Number(nowpage));
    data = data.replace(reg, str);

    res.send(data);
});

// 当用户访问 "/detail" 路径时，会根据查询参数 id 加载对应的新闻详情页。
app.get("/detail", (req, res) => {
    let id = req.query.id;
    let detail = newsData.find(item => item.id == id);
    console.log(detail);

    // 加载视图
    let detailData = fs.readFileSync("./views/detail.html").toString();
    let reg1 = /<h1 class="title">[\s\S]+<\/h1>/g;
    let reg2 = /<p class="content">[\d\D]+<\/p>/g;

    detailData = detailData.replace(reg1, `<h1 class="title">${detail.title}</h1>`)
                            .replace(reg2, `<p class="content">${detail.content}</p>`);

    res.send(detailData);
});

app.listen(8989, () => console.log("服务器已启动"));

function createPagination(totalPage, currentPage) {
    let str = `<div class="pagination"><a href="/?p=${currentPage<=1 ? 1 : currentPage-1}" class="prev">⌜</a>`;

    for (let i = 1; i <= totalPage; i++) {
        str += `<a href="/?p=${i}"${currentPage == i ? ` class="active"` : ``}>${i}</a>`;
    }

    str += `<a href="/?p=${currentPage>=totalPage ? totalPage : currentPage+1}" class="next">⌝</a></div>`;
    return str;
}
