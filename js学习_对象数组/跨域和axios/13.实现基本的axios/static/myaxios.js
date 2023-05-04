class Axios {
    o2s = data => Object.keys(data).map(item => `${item}=${data[item]}`).join("&");
    request(config) {  // 就是对外暴露的 axios 方法 
        return new Promise((resolve, reject) => {
            let { url = "", method = "get", params = {}, data = {}, responseText = "json" } = config;
            let xhr = new XMLHttpRequest();

            if (Object.keys(params).length > 0) {
                // params有内容 ，拼接到url上；
                url = url + "?" + this.o2s(params);
            }
            xhr.open(method, url);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        config,
                        data:JSON.parse(xhr.responseText),
                        headers:xhr.getAllResponseHeaders(),
                        request:xhr,
                        status:xhr.status,
                        statusText:xhr.statusText
                    })
                }
            }

            xhr.send();
        })
    }
}

function createInstance(){
    let instance = new Axios();
    let request = instance.request.bind(instance);
    return request;
}

let axios = createInstance();