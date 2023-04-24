// 关于新闻列表的后台管理系统操作,管理新闻页面
const express = require('express')
const mongoose = require('mongoose')
let adminRouter = express.Router()
const fs = require('fs')
const newsModel = require('../newModel.js');
adminRouter.get('/addnews',(req,res)=>{
    res.sendFile(process.cwd()+'/views/addnews.html')
})


// let schema = mongoose.Schema({
//     id: Number,
//     title: String,
//     content: String
// })
// let model = mongoose.model("news", schema)


adminRouter.post('/post', async (req, res) => {
    // 连接 MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/news")

    let newsData = req.body; // 获取要添加的新闻数据
    
    try {
        // 判断数据是否为空
        if (Object.keys(newsData).length === 0) {
            throw new Error('News data can not be empty.')
        }

        // 获取当前所有新闻数据，计算新闻ID值
        let newsList = await newsModel.find({})
        let id = newsList.length > 0 ? newsList[newsList.length - 1].id + 1 : 1
        req.body.id = id

        // 创建一个新的文档对象
        let news = new newsModel(newsData)
        await news.save() // 将新闻数据保存到 MongoDB 中
        
        // 记得将连接关闭
        await mongoose.connection.close()

        // 返回操作成功信息给前端
        res.status(201).json({ message: 'News added successfully!' })

    } catch (err) {
        console.log(err)
        // 如果出现错误则返回 500 错误状态码和错误信息
        res.status(500).json({ 
            message: 'An error occurred while adding the news!', 
            error: err.message 
        })
    }
})




module.exports = adminRouter