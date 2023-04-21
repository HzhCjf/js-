const express = require('express')
let app = express()


app.get('/',(req,res)=>{
    console.log(req.path);//类似原生的pathname
    console.log(req.query);//获取地址栏的querystring参数
    console.log(req.route);//获取路由相关信息
    // console.log(req.body);//需要基于第三方中间件(插件),接收post参数
    console.log(req.get('Accept'));//可以获取请求头部信息
    //服务器:获取请求头部,可以设置返还头部  运行nodejs
    // 客户端(浏览器):获取返还头部,可以设置请求头部,    运行js
    res.send('<h1>主页</h1>')
})

// >id=10
app.get('/user/:id',(req,res)=>{
    console.log(req.params);//地址栏上面传的参数,用/user进不去,http://localhost:8989/user/10
    res.send('用户页面')
})
app.listen(8989)