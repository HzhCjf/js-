// express里的中间件 （插件）： 可以在express里利用 use 把中间件加入到express 应用里面；
// express里中间件 ： 1.内置中间件  2.自定义中间件  3.第三方中间件 4.错误处理中间件 

// 中间件本质上就是一个函数；

// express 中间件执行 遵循 洋葱模型 ；

// 1.自定义中间件: middleware
// 2.错误处理中间件 ： 如果出现错误 就会转交给 错误处理中间件 ；
const express = require("express");

let app = express();

let m1 = function (req, res, next) {
    req.money = 1000;
    console.log("我是m1中间件start");
    next();  // 转交中间件权限 ；
    console.log("我是m1中间件end");

}

let m2 = function (req, res, next) {
    req.money -= 200;
    console.log("我是m2中间件start");
    // next(111111);  // 错误的语法 ，一旦错误 就会把错误转交给错误处理中间件
    next();
    console.log("我是m2中间件end");

}

let m3 = function (req, res, next) {
    req.money -= 200;
    console.log("我是m3中间件start");
    next();
    console.log("我是m3中间件end");

}

let m4 = function (err, req, res, next) {
    if (err) {
        return console.log("错误了:", err);
    }
    next();
}

app.use(m1);
app.use(m2);
app.use(m3);
app.use(m4);


app.get("/", (req, res) => {
    res.send("hello" + req.money);
})

app.listen(8989);
