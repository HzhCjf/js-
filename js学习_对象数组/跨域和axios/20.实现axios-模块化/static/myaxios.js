
import Axios from "./Axios.js";
import './mixin.js';
import mergeConfig from './util.js';

function createInstance() {
    let instance = new Axios();
    let request = instance.request.bind(instance);
    // 把 Axios原型里的 方法 混入到 request函数中去 ；
    mergeConfig(request, Axios.prototype, instance);
    console.log("实例:", instance)
    // 把实例instance里的 interceptors 属性混入 到 request函数里去；
    mergeConfig(request, instance);
    console.dir(request);
    return request;
}

let axios = createInstance();

export default axios;