// 关于新闻列表的后台管理系统操作,管理新闻页面
const express = require('express')
let adminRouter = express.Router()
const fs = require('fs')

adminRouter.get('/addnews',(req,res)=>{
    res.sendFile(process.cwd()+'/views/addnews.html')
})


adminRouter.post('/post',(req,res)=>{
    // 接收post过来的参数
    let news = JSON.parse(fs.readFileSync('./data/news.json').toString())
    req.body.id = news.length+1
    news.push(req.body)
    fs.writeFileSync('./data/news.json',JSON.stringify(news))
    res.redirect('/index')

})


module.exports = adminRouter