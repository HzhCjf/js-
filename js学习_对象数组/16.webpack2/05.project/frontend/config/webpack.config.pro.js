// 生产环境的配置 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(process.cwd(), "./dist"),
        filename: "[name].js",
        publicPath:"/"
    },
    resolve: {
        alias: {
            "@": path.resolve(process.cwd(), "src")
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: "html-loader"
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                options: {
                    variable: 'data', // 可以在模块当中使用data进行数据处理
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "myapp",
            filename: "index.html",
            template: "./public/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "public",
                to: "./",
                globOptions: {
                    ignore: ["**/index.html"] // 排除index.html
                }
            }, {
                from:"src/static",
                to:"./"
            }]
        })
    ]
}