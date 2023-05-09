
// 开发的时候需要运行的配置 
// 生产配置引入 
let proConfig = require("./webpack.config.pro.js");
// Object.assign()
module.exports = {
    ...proConfig,
    mode: "development",
    devServer: {
        // 自动开启浏览器
        open: true,
        // 端口
        port: 8081,
        liveReload: true,//启动自动更新
        proxy: {
            '/api': {
                target: 'http://localhost:8989',
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}