const express = require("express");
const formidable = require("formidable");  // 需要安装 ；
const fs = require("fs");
const app = express();
const static = express.static;
app.use(static("./uploads"));

let form = new formidable.IncomingForm({
    uploadDir: __dirname + "/uploads", // 上传文件的目录，需要一个绝对地址 ；
    keepExtensions: true  // 保持和之前文件后缀一致 ；
})
if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.post("/file", (req, res) => {
    // err 是否有错误
    // fileds ： 传递的数据 字段
    // file ： 文件对象 ；
    form.parse(req, (err, fileds, file) => {
        console.log(fileds);
        console.log(file.myimg.newFilename);

        let obj = {
            ...fileds,
            imgurl: file.myimg.newFilename
        }
        fs.writeFileSync("./users.json", JSON.stringify(obj));
    })

    res.json({
        info: "上传成功",
        status: 1
    })
})

app.get("/show", (req, res) => {
    res.sendFile(__dirname + "/views/show.html");
})

app.get("/getuser", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./users.json"));
    res.json(data);
})


app.listen(8989);


// 题目 ： 上传一个图片姓名和年龄 ，然后通过users.json把数据保存下来 ，然后 通过一个路由显示 数据和图片；