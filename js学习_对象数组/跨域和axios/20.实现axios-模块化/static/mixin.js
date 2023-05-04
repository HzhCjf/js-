// 给 Axios.prototype 里添加 各种方法  
import Axios from './Axios.js';


let methodArr = ['get', 'post', 'put', "delete", "head", "patch"];

methodArr.forEach(method => {
    if (method === "get" || method === "delete" || method === "head") {
        Axios.prototype[method] = function (url, config = {}) {
            config.method = method;
            config.url = url;
            return this.request(config)
        }
    } else {
        Axios.prototype[method] = function (url, data, config = {}) {
            console.log("?",this);
            config.method = method;
            config.url = url;
            config.data = data;
            // this()
            return this.request(config)
        }
    }
})

