// 通过http构建服务器 
// const http = require("http");
// const url = require("url");
const express = require("express");
const fs = require("fs");
const indexRouter = require("./routers/indexRouter.js");
const adminRouter = require("./routers/adminRouter.js");
const path = require("path");
const bodyParser = require("body-parser");

// const path = require("path");
// const mime = require("./data/mime.json");

const static = express.static;
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"./views"))
app.set("view engin","ejs");
app.use(static("./img"));
app.use("/index",indexRouter);
app.use("/admin",adminRouter);
app.listen(8989);

