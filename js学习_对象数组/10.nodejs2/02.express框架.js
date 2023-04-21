// express是nodejs的一个框架,也是一个模块
// nodejs框架;1.express 2.koa   轻量级框架,可以使用插件扩展功能
const express =require('express')
let app = express()//创建一个app应用
// 创建路由加载内容
app.get('/',(req,res)=>{
    res.send('hello world')//write和end的集合
})

app.get('/users',(req,res)=>{
    res.send('hello users')//write和end的集合
})

app.listen(8989)

