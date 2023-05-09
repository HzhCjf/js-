const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(txt|md)$/,
                use: 'raw-loader'
            },
            {
                test: /.m?js$/,  //  处理 js 或者是 mjs文件 
                exclude: /node_modules/, //  排除的目录 ，node_modules不做降级处理
                use: {
                    loader: 'babel-loader', // 使用 babel-loader处理
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: { chrome: "58", ie: "11" } }] // 降级到可以兼容的浏览器版本
                        ]
                    }
                }
            },
            {
                test: /.(png|jpe?g|gif)$/,  // 处理的文件后缀
                use: {
                    loader: "url-loader",
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称
                        // [ext] 源资源模块的后缀
                        name: "[name]_[hash].[ext]",
                        //打包后的存放位置
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: './images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, "css-loader"]  // 数组是倒序执行的 ，一定需要 先使用 css-loader  然后再 使用style-loader 把css添加到页面中 
            },
            {
                test: /.less$/i,
                use: [
                    //use中loader加载是有顺序的，先下后上，注意有的loader需要按照顺序书写
                    "style-loader",
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My App",  // 打包之后title的名字
            filename: "app.html", // 打包之后html的名字 
            template: "./src/index.html" // 打包之前html所在的位置；
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'  // 生成的css文件名称 
        })
    ]
}