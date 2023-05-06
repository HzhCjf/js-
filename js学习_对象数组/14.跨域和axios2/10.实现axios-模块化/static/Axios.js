class Axios {
    o2s = data => Object.keys(data).map(item => `${item}=${data[item]}`).join("&");
    constructor() {
        this.interceptors = {
            request: {
                handles: [],  // 用来保存多个 onResolved 和 onRejected
                // [{fufiled:fn1,rejected:fn1},{fufiled:fn2,rejected:fn2},{fufiled:fn3,rejected:fn3}]
                use(onResolved, onRejected) {
                    this.handles.push({
                        fufilled: onResolved,
                        rejected: onRejected
                    })
                }
            },
            response: {
                handles: [],
                use(onResolved, onRejected) {
                    this.handles.push({
                        fufilled: onResolved,
                        rejected: onRejected
                    })
                }
            }
        }
    }

    request(config) {  // 就是对外暴露的 axios 方法 
        console.log("---");
        // return  this.xhr(config);

        // 所有需要执行的函数 放在一个队列里面 
        let chain = [this.xhr.bind(this),undefined];
        // chain = 【请求拦截器成功1，请求拦截器失败1，请求拦截器成功2，请求拦截器失败2  ，xhr，undefined， 返还拦截器成功1，返还拦截器成功1，返还拦截器成功1，返还拦截器成功2】
        // chain = [requestfn1,rejectfn1,requestfn2,rejectfn2,xhr,undefined,response1fn,response1fn,response2fn,response2fn]
        // 所有的请求拦截器 
        // 把所有请求拦截器 添加到队列之前 
        this.interceptors.request.handles.forEach(item=>{
            chain.unshift(item.fufilled,item.rejected);
        })

        // 返还拦截器添加到队列之后 
        this.interceptors.response.handles.forEach(item=>{
            chain.push(item.fufilled,item.rejected);
        })

        console.log("队列:",chain);


        // 执行队列 ：利用promise来执行队列 
            let promise = Promise.resolve(config);
            while(chain.length>0){
                promise = promise.then(chain.shift(),chain.shift());
            }
            return promise;
    }

    xhr(config) {  // 发送前端 ajax请求 
        console.log("??",this);
        return new Promise((resolve, reject) => {
            let { url = "", method = "get", params = {}, data = {}, responseType = "json", headers = { "Content-Type": "application/json", token: 123 } } = config;
            let xhr = new XMLHttpRequest();

            if (Object.keys(params).length > 0) {
                // params有内容 ，拼接到url上；
                url = url + "?" + this.o2s(params);
            }

            xhr.open(method, url);

            // 需要把头部信息 设置给 xhr  
            for (let [key, val] of Object.entries(headers)) {
                xhr.setRequestHeader(key, val);
            }



            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 根据 responseType 选择是否返还处理之后的json数据 ，如果是text 那么直接返还json数据，如果是json 那么就返还转换之后的json
                    if (responseType === "json") {
                        resolve({
                            config,
                            data: JSON.parse(xhr.responseText),
                            headers: xhr.getAllResponseHeaders(),
                            request: xhr,
                            status: xhr.status,
                            statusText: xhr.statusText
                        })
                    } else {
                        resolve({
                            config,
                            data: xhr.responseText,
                            headers: xhr.getAllResponseHeaders(),
                            request: xhr,
                            status: xhr.status,
                            statusText: xhr.statusText
                        })
                    }

                }
            }
            if (method === "get") {
                xhr.send();

            } else {
                // 1.头部是  application/json 发送 json数据
                if (headers['Content-Type'] === "application/json") {
                    xhr.send(JSON.stringify(data));
                } else {
                    // 2.头部是 表单 application/x-www-form-urlencoded  发送 a=1&b=2&c=3
                    xhr.send(this.o2s(data));
                }


                // 3.text/plain  : 直接发送字符串 
            }
        })



    }


    http(){
        // 判断环境 ，发送 nodejs里的http请求；
        // http.request(); 发送后端请求 ；
        // 通过一些变量来区分 是nodejs 还是  前端的环境 ；process 、window 
    }


}

export default Axios;