// 引入 Node.js 模块 http、fs 和 url
// 引入Node.js 中的http模块，该模块提供http工具库，可用于创建并监听端口的服务器。
const http = require("http");  // 创建 HTTP 服务器
// 引入Node.js中的fs模块，该模块提供了文件处理 API，用于读访问服务器本地的文件系统。
const fs = require("fs");      // 文件读写模块
// 引入Node.js中的url模块，用于解析 URL
const url = require("url");    // URL 解析模块

// 创建一个 HTTP 服务器实例
const server = http.createServer((req, res) => {
  // 在响应头中设置 Content-Type 为 text/html，编码为 utf-8
  res.setHeader("Content-type", "text/html;charset=utf-8"); 

  // 从请求URL中解析出pathname
  let { pathname } = url.parse(req.url);

  // 如果请求的pathname是 / ，返回注册页面 
  if (pathname === "/") {
    // 同步读取register.html文件，将其作为响应写入
    let data = fs.readFileSync("./register.html", "utf-8");
    res.write(data);
    res.end();
  }
  // 如果请求的 pathname 是 /register ，说明是提交注册信息
  else if (pathname === "/register") {
    // 解析 URL 中的参数，其中包括用户名和密码
    let { username, pwd } = url.parse(req.url, true).query;

    // 读取用户数据存储文件 user.json
    let users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

    // 将新用户数据追加到users数组中
    users.push({ username, pwd });

    // 将更新后的用户数据写回文件 user.json
    fs.writeFileSync("./user.json", JSON.stringify(users));

    // 返回响应提示信息，显示 注册成功以及用户名和密码 
    res.write(`注册成功！用户名：${username}，密码：${pwd}`);
    res.end();
  }
  // 如果请求的 pathname 是 /show ，说明要展示用户数据
  else if (pathname === "/show") {
    // 读取用户数据存储文件 user.json
    let users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

    // 构造html内容并作为响应写入
    let html = "<h2>用户信息</h2><ul>";
    users.forEach((user) => {
      html += `<li>用户名：${user.username}，密码：${user.pwd}</li>`;
    });
    html += "</ul>";
    res.write(html);
    res.end();
  }
});

// 监听端口8989，启动服务器
server.listen(8989);
