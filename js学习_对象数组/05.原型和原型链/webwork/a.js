console.time();
for (var i = 0; i < 100000000; i++) {

}
console.timeEnd();
var resa = 1000;
console.log("a运行完了")

postMessage(resa)  // 发送 resa 