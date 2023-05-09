## 常用的plugins ： 扩展webpack功能 ；
### HtmlWebpackPlugin 插件 ： 自动生成一个调试的html 文件 引入编译之后的 js
- 安装 ： `npm install --save-dev html-webpack-plugin`
- 引入 模块 
```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

- 配置 htmlwebpackplugin 
```js
plugins: [
new HtmlWebpackPlugin({
    title: "My App",
    filename: "app.html",
    template: "./src/html/index.html"
})
]
```

### mini-css-extract-plugin : 提取css文件 
- 安装 ： `npm install --save-dev mini-css-extract-plugin`
- 引入 ： `const MiniCssExtractPlugin = require('mini-css-extract-plugin')`
- 替换 style-loader  :
```js
{
         loader: MiniCssExtractPlugin.loader
}
```
- 配置 plugins
```js
    new MiniCssExtractPlugin({
       filename: '[name].css'  // 生成的css文件名称 
    })
```

### clean-webpack-plugin : 清除打包之后目录的插件 
- 安装 ： `npm install --save-dev clean-webpack-plugin`
- 引入 ： `const {CleanWebpackPlugin} = require('clean-webpack-plugin');`
- 配置 ： 
```js
new CleanWebpackPlugin()
```


<!-- 作业： 复习 -->