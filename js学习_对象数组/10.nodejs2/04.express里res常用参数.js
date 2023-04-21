// express里res常用参数:从服务器到浏览器的内容
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    // res.send('11')//发送内容到前端
    // res.sendFile(__dirname+"/01.views/index.html")//需要一个绝对地址,这是把内容发送到前端的,__dirname获取绝对地址的
    // res.json({name:'张三',age:20})
    // 安装chrome插件:https://chrome.zzzmh.cn/#/extension
    // 1.下载插件 2.进入扩展程序 打开开发模式 3. 把下载的文件直接拖进浏览器
    // res.redirect('/users')//重定向,跳转一个新地址
    // res.status(404)//设置返还的状态
    // res.send('hello')
})

app.get('/users',(req,res)=>{
    res.send('zhuye')
})
app.listen(8989)