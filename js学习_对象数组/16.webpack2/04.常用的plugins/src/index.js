let obj = require("./a.js")
import myhtml from './myhtml.html';
import "./mycss.css";
console.log(myhtml);
console.log(document.body);
document.body.innerHTML = myhtml;
console.log(obj)

function fn(a, b) {
    console.log(a)
}
fn(10, 20);
console.log("我是添加的内容");

import myobj from './b.js';
myobj.fn();
import axios from 'axios';

// 获取btn按钮 

let btn = document.createElement("button");
btn.innerHTML = "发送ajax";
document.body.appendChild(btn);
btn.onclick = async function () {
    console.log("点击了");
    let { data } = await axios.get("/api/getdata");
    console.log(data);
}


