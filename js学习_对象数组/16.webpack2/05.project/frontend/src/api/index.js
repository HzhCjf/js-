import axios from "axios";
import Nprogress from 'nprogress';  // 引入js文件
import "../../node_modules/nprogress/nprogress.css"; // 引入css
let instance = axios.create({
    timeout:3000,
    baseURL:"/api"
})
// Object.create({},{},{配置});
instance.interceptors.request.use(config=>{
    console.log("请求拦截器启动");
    config.headers['Authorization'] = "Bearer " + localStorage.getItem("token")
    Nprogress.start();
    return config;
})

instance.interceptors.response.use(response=>{
    console.log("执行了返还拦截器");
    Nprogress.done();
    return response
},err=>{
    console.log("网络请求失败",err);
    let status = err.response.status;
    if(status===401){
        window.location.href = "/login";
    }
})


export default instance;


// 作业 ： 1.复习  2. 广告模块 