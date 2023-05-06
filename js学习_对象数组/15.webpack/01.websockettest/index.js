// 需要通过websocket 创建一个服务器
// 需要借助一个ws模块,安装wsmok
const express =require('express')
let app  = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})


app.listen(8989)


const websocketServer =require('ws')
let socket = new websocketServer.Server({port:8181})

socket.on('connection',ws=>{
    console.log('有websocket连接过来了',ws);

    // 后端接收数据,需要监听一个message事件

    ws.on('message',e=>{
        console.log('有事件过来了',e.toString());

        // 所有的ws连接都会保存在clinets里
        socket.clients.forEach(client=>{
            client.send('你好')
        })
    })
})