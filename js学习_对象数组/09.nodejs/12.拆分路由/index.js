const http = require('http')
const url = require('url')
const EventEmit = require('events')
let eventObj = new EventEmit()
const router = require('./router.js')
router(eventObj)
const server = http.createServer((req,res)=>{
    let {pathname} = url.parse(req.url)
    res.setHeader('Content-Type',"text/html;charset=utf-8");
    if(eventObj.listenerCount(pathname)>0){
        eventObj.emit(pathname,res)
    }else{
        res.write('<h1>404</h1>')
    }
    res.end()
})

server.listen(8989)