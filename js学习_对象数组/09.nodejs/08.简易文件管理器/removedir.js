const fs =  require("fs");
function removeDir(src){
    // 删除目录里的文件 ，在删除外层目录
    // 先读取 src里的内容 ，判断如果是文件 直接删除 ；
    let arr = fs.readdirSync(src);
    console.log(arr);  // [1.txt,2.txt];
    arr.forEach(item=>{  // 1.txt 2.txt
        // 判断是文件 还是目录 ，如果是文件 直接删除；
        let url = src +"/" +  item;  // ./mytest/1.txt
        let stat = fs.statSync(url);
        if(stat.isFile()){
            // 是文件
            fs.unlinkSync(url);
        }else{
            // 是目录
            removeDir(url);  // ./mytest/mydir/test
        }
    })
    // 删除最外层目录
    fs.rmdirSync(src);
}

module.exports = removeDir;