/* 
nodejs里的commonjs规范 ，模块化规范 。
一、文件模块  ，一个文件就是一个模块 。 （自定义模块）
二、目录模块 , 一个目录就是一个模块 。 会自动查找目录下的index.js文件（自定义模块）
三、内置模块 （nodejs自带的模块）
四、第三方模块 （别人写的模块,包（package））

特殊的目录模块 名字 叫 node_modules 。存放第三方模块 


*/

// 引入node_modules里的模块 
// let obj = require("./node_modules/mymA/index.js"); // 文件的引入方式 
// 1.不需要 ./ 
// 2.会向上查找  : 首先会在同级目录里查找  node_modules 里的模块，如果找不到会查找上级的node_modules 查找模块名称  。 直到找到全局的node_modules :  npm root -g
let obj = require("mymA");
console.log(obj);
let obj2 = require("mymB");
console.log(obj2);
