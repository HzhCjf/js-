import "./a.css";  // 直接引入css文件
// import a from './路径.js'
import "./myless.less";
import txt from './my.txt';
console.log(txt);
let pEle = document.createElement("p");
pEle.innerHTML = txt;
document.body.appendChild(pEle);

let aaa = 10;
console.log(aaa);
import myimg from './1.png';
console.log(myimg);

let imgEle = document.createElement("img");
imgEle.src = myimg;
document.body.appendChild(imgEle);


