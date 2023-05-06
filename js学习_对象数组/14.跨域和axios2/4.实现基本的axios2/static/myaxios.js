class Axios {
    o2s = data => Object.keys(data).map(item => `${item}=${data[item]}`).join("&");
    request(config) {  // 就是对外暴露的 axios 方法 
        return new Promise((resolve, reject) => {
            let { url = "", method = "get", params = {}, data = {}, responseType = "json" ,headers={"Content-Type":"application/json",token:123} } = config;
            let xhr = new XMLHttpRequest();

            if (Object.keys(params).length > 0) {
                // params有内容 ，拼接到url上；
                url = url + "?" + this.o2s(params);
            }

            xhr.open(method, url);

            // 需要把头部信息 设置给 xhr  
            for(let [key,val] of Object.entries(headers)){
                xhr.setRequestHeader(key,val);
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
            if(method==="get"){
                xhr.send();

            }else{
                // 1.头部是  application/json 发送 json数据
                if(headers['Content-Type']==="application/json"){
                    xhr.send(JSON.stringify(data));
                }else{
                // 2.头部是 表单 application/x-www-form-urlencoded  发送 a=1&b=2&c=3
                    xhr.send(this.o2s(data));
                }
                

                // 3.text/plain  : 直接发送字符串 
            }
        })
    }
}

function createInstance() {
    let instance = new Axios();
    let request = instance.request.bind(instance);
    return request;
}

let axios = createInstance();