// ajax 一个请求库 ： axios 
// 1.提供多种请求方式  axios() , axios.get() axios.post()
// 2.适配器 ： 可以适配 前端 和 nodejs端 
// 3. 创建实例 ，发送不同的请求 
// 4. 拦截器 ： 请求拦截器 和返还拦截器 。可以拦截所有的请求和返还；
// 5. 做了promise封装的 ；
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const static = express.static;
app.use(static("./static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/get", (req, res) => {
    console.log(req.query);
    setTimeout(() => {
        res.json({
            info: 'get返还的数据',
            status:1
        })
    }, 2000);
   
})

app.head("/head", (req, res) => {
    console.log(req.query);
    res.json({
        info: 'head返还内容',
        status:1
    })
})

app.delete("/delete", (req, res) => {
    console.log(req.query);
    res.json({
        info: 'delete返还内容',
        status:1
    })
})


app.post("/post", (req, res) => {
    console.log(req.body);
    setTimeout(() => {
        res.json({
            info: 'post返还内容',
            status:1
        })
    }, 2000);
    
})

app.put("/put", (req, res) => {
    console.log(req.body);

    res.json({
        info: 'put返还内容',
        status:1
    })
})

app.patch("/patch", (req, res) => {
    console.log(req.body);
    res.json({
        info: 'patch返还内容',
        status:1
    })
})
app.listen(8989);