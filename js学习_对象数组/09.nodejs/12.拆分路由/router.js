module.exports = function(eventObj){
    eventObj.on('/',function(res){
        res.write('<h1>主页</h1>')
    })
    eventObj.on('/product',function(res){
        res.write('<h1>产品页面</h1>')
    })
    eventObj.on('/users',function(res){
        res.write('<h1>用户页面</h1>')
    })
}