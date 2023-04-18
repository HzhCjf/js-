// 如何删除 非空目录？
// 1.先读取目录里的内容 ，把 目录里的内容全部删除掉 
// 2.最后在删除最外层的空目录；


// 1.先删除目录里的文件,删除文件之后再删除外层目录
const fs = require('fs')
function rmoveDir(src){
    // 先读取src里的内容,判断如果是文件直接删除
    let arr = fs.readdirSync(src)
    arr.forEach(item=>{
        // 进行路径拼接
        let url = src + '/' + item;
        
        let stat = fs.statSync(url)
        if(stat.isFile()){
            // 删除文件
            fs.unlinkSync(url)
        }else{
            // 如果是目录的话进行递归删除
            rmoveDir(url)
        }
    })
    // 删除最外层目录
    fs.rmdirSync(src)
}


rmoveDir('./1')