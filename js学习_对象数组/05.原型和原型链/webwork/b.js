console.time();
for (var i = 0; i < 100000000; i++) {

}
console.timeEnd();
var resb = 2000;
console.log("b运行完了")

postMessage(resb)  // 发送 resb