const http = require("http");
const myurl = require("./myurl");
const users = require("./users.json")
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url !== "/favicon.ico") {
        res.setHeader("Content-Type","text/html;charset=utf-8");
        // 获取地址栏 里的qureystring参数 然后 在 users.json里查找是否存在；
        let { username, pwd } = myurl.parse(req.url);
        // console.log("??",obj);
        // console.log("pwd:",typeof pwd);

        let reslut = users.find(item => item.username === username && item.pwd == pwd);
        // console.log("结果",reslut);
        if(reslut){
            res.write("用户名且密码正确");
        }else{
            res.write("用户名或者密码错误");
        }
        res.end();

        
    }


})

server.listen(8989);