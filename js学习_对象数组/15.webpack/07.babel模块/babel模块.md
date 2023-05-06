
## babel : 可以给ES语法 降级处理 
- 浏览器 既支持 ESM 又支持 commonjs 。先通过  babel 降级 在通过 browserify 转换成 浏览器可以识别的语法 ；
- babel的使用 ； 
    - 局部安装 babel ： `npm install --save-dev @babel/core @babel/cli @babel/preset-env`
    - 配置一个 babel的配置文件 ：babel.config.js
    - 启动babel指令 转换 代码 
        - 方式一 ： ./node_modules/.bin babel 转换前的目录地址 -d 转换后的地址
        - 方式二 ： npx babel 转换前的目录地址 -d 转换后的地址
            - npx 会自动查找 .bin 目录 ；