console.log("我是a模块");


// 1.如果 导出的变量 直接 在export之后声明可以直接导出 ；
// export let a = 10;



// 2.如果在上面声明 需要通过 export 导出 那么 需要用大括号包裹；
let a = 20;
// export 可以导出多个 ；
export {a};  // 不是对象的大括号  ，是固定写法；
export let b = 30;
let c  = 40;
export default {c}   // 只能导出一个 ；是一个对象