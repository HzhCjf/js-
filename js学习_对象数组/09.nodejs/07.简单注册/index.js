const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type","text/html;charset=utf-8");
    let {pathname} = url.parse(req.url);
  
    if(pathname==="/"){
        let data = fs.readFileSync("./register.html", "utf-8");
        res.write(data);
        res.end();
    }else if(pathname==="/register"){
        // 获取 URL 参数
        let {username,pwd} = url.parse(req.url, true).query;
        
        // 读取 JSON 文件并将用户数据追加到 users 数组中
        let users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));
        users.push({username, pwd});
        
        // 将新的用户数据写入 user.json 文件
        fs.writeFileSync("./user.json", JSON.stringify(users));
        
        // 返回响应提示信息
        res.write(`注册成功！用户名：${username}，密码：${pwd}`);
        res.end();
     
    }else if(pathname==="/show"){
        // 从 user.json 文件中读取数据并输出到页面
        let users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));
        let html = "<h2>用户信息</h2><ul>";
        users.forEach(user => {
            html += `<li>用户名：${user.username}，密码：${user.pwd}</li>`;
        });
        html += "</ul>";
        res.write(html);
        res.end();
    }
})

server.listen(8989); 
