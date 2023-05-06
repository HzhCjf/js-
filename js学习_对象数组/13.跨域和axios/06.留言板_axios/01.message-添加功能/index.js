const express = require('express')
const bodyParser = require('body-parser')
const model = require('./models')
let app = express()
const static = express.static
app.use(static('./static'))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.post('/addmessage', async (req,res)=>{
    // 获取前端发送的数据,添加到数据库
    console.log(req.body);
    let {username,message} = req.body

    try{
        await model.create({
            username,
            message,
            replay:[]
        })
        res.json({
            info:'添加成功',
            status:1
        })
    }catch(err){
        res.json({
            info:'添加失败',
            status:0
        })
    }
})


app.listen(8989)