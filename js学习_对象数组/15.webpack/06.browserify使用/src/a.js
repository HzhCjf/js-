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