let a = 10;
console.log("我是a模块");

// 1 特殊的别名 
// as  和 default 都是关键字 
// export {a as default};  // 等同于  export defalut a

// 2. 给 普通的变量起别名 
// as 是 关键字 
// export {a as b};  // 把a变量当成 b 变量导出 接收也是接收b变量；
// let c = 20 ;
// export {c as d};

let c = 30;
function fn(){
    console.log("fn")
}
// export default a;
export {a};
export {c}
export default fn;