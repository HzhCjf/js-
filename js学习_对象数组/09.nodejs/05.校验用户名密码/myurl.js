let myurl = {
    parse(url){
        let str = url.split("?")[1];
        console.log(str);
        let arr = str.split("&");
        var obj = {};
        arr.forEach(item=>{
            // console.log(item);
            let lineArr = item.split("=");
            obj[lineArr[0]] = lineArr[1];
        })
        // console.log(obj);
        return obj;
    }
}
module.exports = myurl;