// 开发环境的配置 ；
const proConfig = require("./webpack.config.pro.js");
module.exports = {
    ...proConfig,
    mode: "development",
    devServer: {
        port: 8080, // 端口号
        open: true,  // 自动打开浏览器
        liveReload: true,//启动自动更新
        historyApiFallback: true,
        proxy:{
            "/api":{
                target:"http://localhost:8989",
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}