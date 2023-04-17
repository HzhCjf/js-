let a = 10;
// module.exports = {
//     a
// }

// 也可以 通过  exports 导出变量 ，exports是 module.exports的一个引用 。 真正的导出 还是  module.exports;

// exports.a = a;  // 通过 引用关系  改变 module.exports的值 达到导出的目的 ；
// exports = {  // 不行 
//     a
// }
// console.log(exports===module.exports);