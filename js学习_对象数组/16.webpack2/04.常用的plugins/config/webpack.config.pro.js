
// 生产环境的配置 ；
const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(process.cwd(), "./dist"),
        filename: "[name].js"
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, "css-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [new CopyWebpackPlugin({
        patterns: [{
            from: "./src/static",  // 需要复制的目录 
            to: "static",  // 编译之后的目录
            globOptions: {
                ignore: ["**/index.html"]  // 复制的时候排除掉html文件
            }
        }]
    }), new HtmlWebpackPlugin({
        title: "My App",
        filename: "index.html",
        template: "./src/static/index.html"
    }), new MiniCssExtractPlugin({
        filename: '[name].css'
    })]
}