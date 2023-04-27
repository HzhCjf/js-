// 引入 Express 模块和 Node.js 内置模块 fs 和 path
const express = require("express");
const fs = require("fs");
const path = require("path");

// 引入 indexRouter 和 adminRouter 对象
const indexRouter = require("./routers/indexRouter.js");
const adminRouter = require("./routers/adminRouter.js");

// 引入 body-parser 模块用于解析 POST 请求参数
const bodyParser = require("body-parser");

// 创建 Express 实例
let app = express();

// 使用 body-parser 中间件来解析 application/x-www-form-urlencoded 类型的请求体
app.use(bodyParser.urlencoded({extended:true}));

// 设置视图文件所在的目录
app.set("views",path.join(__dirname,"./views"))

// 设置使用的模板引擎为 EJS（Embedded JavaScript）
app.set("view engin","ejs");

// 指定存放静态文件（如图片、样式表、JavaScript 文件）的目录为 "./img"
// 这意味着，当访问 "/img/xxx.png" 时，Express 会自动去获取 "./img/xxx.png" 文件并返回给客户端
app.use(express.static("./static"));

// 将路由对象挂载到对应的路径上
app.use("/index",indexRouter); // 当访问 "/index" 路径时，交由 indexRouter 中间件处理
app.use("/admin",adminRouter); // 当访问 "/admin" 路径时，交由 adminRouter 中间件处理

// 启动 Express 应用，监听端口号 8989，并打印日志
app.listen(8989, () => {
  console.log("Server started listening on port 8989!");
});
