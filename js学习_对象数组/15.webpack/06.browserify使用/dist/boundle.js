(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    console.log("aaaa");
    // let a = 10;
    // export default a;
    let {fn,name} = require("./b.js");
    console.log(name);
    fn();
    module.exports = {
        a:10,
        b:20
    }
    },{"./b.js":2}],2:[function(require,module,exports){
    console.log("我是b模块");
    module.exports = {
        name:"wo shi b模块",
        fn(){
            console.log("fn")
        }
    }
    },{}],3:[function(require,module,exports){
    // browserify 模块  : 把 nodejs里的commonjs 语法 转成浏览器可以识别的语法 ；
    // 模块化 ： 1.commonjs 规范 (nodejs的语法 )  2. ESM  （前端js的语法）
    // import a from './a.js';
    // console.log(a);
    let obj = require("./a.js");
    console.log(obj);
    },{"./a.js":1}]},{},[3]);
    