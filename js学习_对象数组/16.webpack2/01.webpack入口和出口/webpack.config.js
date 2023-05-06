// webpack的配置文件 
// 一、单入口 和单出口 
const path = require("path");
// module.exports = {
//     mode:"development",
//     entry:path.resolve(__dirname,"./src/index.js"),
//     output:{
//         path:path.resolve(__dirname,"./dist"),
//         filename:"boundle.js"
//     }
// }

// 二、多入口 、单出口

module.exports = {
        mode:"development",
        entry:[path.resolve(__dirname,"./src/index.js"),path.resolve(__dirname,"./src/c.js")],
        output:{
            path:path.resolve(__dirname,"./dist"),
            filename:"boundle2.js"
        }
    }


// 三 、多入口 、多出口 

// module.exports = {
//     mode:"development",
//     entry:{
//         index1:path.resolve(__dirname,"./src/index.js"),
//         index2:path.resolve(__dirname,"./scr/c.js")
//     },
//     output:{
//         path:path.resolve(__dirname,"./dist"),
//         filename:"[name].js"  // 多出口 文件名称只能使用 变量 [name]
//     }
// }