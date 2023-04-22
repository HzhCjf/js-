// 模板引擎 ： 
// 1.html ： 模板引擎 ： numjucks 、ejs 、jade 、pug 、smart..  2. css ： less 、sass 、stylus  3. js ：自带逻辑处理 

// ejs模板引擎 ： 可以前端使用  也可以在nodejs里使用 ；
// 1.前端使用ejs模板引擎 ；
// 可以让html 拥有 逻辑处理的能力： 如果遇到 js 语法 需要通过 ejs里的 <% %> 包裹起来  ； 其他的就当成 html来解析  。 显示变量 那么通过 <%= 变量 %>  类似 ES6里的 ${变量}


// {}
const express = require("express");
const app = express();
const static = express.static;
app.use(static("./static"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.listen(8989);