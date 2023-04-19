// 事件系统 
// 预定义事件 （系统定义好的事件）   自定义事件（观察者模式）
const EventEmit = require("events");

// 实例化事件类 
let eventObj = new EventEmit();
// EventTarget
// 一、绑定自定义事件 
// js绑定事件  元素.addEventListener("事件名称",事件函数);
eventObj.on("myevent1",function(res){
    console.log("event11111",res);
})
// eventObj.on("myevent1",function(){
//     console.log("event2222");
// })

// // 二、触发自定义事件  
eventObj.emit("myevent1","hello");
// eventObj.emit("myevent1");


// 三 、可以绑定事件 只触发一次 
// eventObj.once("myevent1",function(){
//     console.log(11111);
// })

// eventObj.once("myevent1",function(){
//     console.log(2222);
// })

// eventObj.emit("myevent1");
// eventObj.emit("myevent1");
// eventObj.emit("myevent1");

// 四、解除绑定事件  事件对象.off("事件名称","事件函数");
// function fn1(){
//     console.log(111);
// }
// function fn2(){
//     console.log(222);
// }

// eventObj.on("myevent1",fn1);
// eventObj.on("myevent1",fn2);
// eventObj.off("myevent1",fn2);  // 解除绑定 fn2
// eventObj.emit("myevent1")

// 五、解除事件绑定  ：removeListener
// function fn1() {
//     console.log(111);
// }
// function fn2() {
//     console.log(222);
// }

// eventObj.on("myevent1", fn1);
// eventObj.on("myevent1", fn2);
// eventObj.removeListener("myevent1",fn2);
// eventObj.emit("myevent1");

// 六、解除所有的绑定 ；

// function fn1() {
//     console.log(111);
// }
// function fn2() {
//     console.log(222);
// }

// eventObj.on("myevent1", fn1);
// eventObj.on("myevent1", fn2);
// eventObj.removeAllListeners();
// eventObj.emit("myevent1");


// 七、查看事件绑定的数量 :listenerCount
function fn1() {
    console.log(111);
}
function fn2() {
    console.log(222);
}

eventObj.on("myevent1", fn1);
// eventObj.on("myevent1", fn2);

let res =  eventObj.listenerCount("myevent1");
console.log(res);

