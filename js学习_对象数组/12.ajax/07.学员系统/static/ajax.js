function ajax(config) {
    return new Promise((resolve) => {

        // name=张三&age=20
        const o2s = data => Object.keys(data).map(item => `${item}=${data[item]}`).join("&");
        // 解构传入的参数 ，且 给默认值；
        // post参数 默认格式给 表单格式 ；
        let { url = "", type = "get", data = {}, dataType = "json", success = function () { }, headers = { "Content-Type": "application/x-www-form-urlencoded" } } = config;
        let xhr = new XMLHttpRequest();
        // /get?name=张三&age=20
        if (type === "get") {
            url = url + "?" + o2s(data);
        }

        xhr.open(type, url);

        if (type === "post") {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }

        if (type === "get") {
            xhr.send();
        } else {
            // 是post方式 
            if (headers["Content-Type"] === "application/json") {
                // 发送json数据格式
                xhr.send(JSON.stringify(data));
            } else {
                // 发送表单格式数据
                xhr.send(o2s(data));
            }

        }
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                if (dataType === "json") {
                    success(JSON.parse(xhr.responseText));
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    success(xhr.responseText)
                    resolve(xhr.responseText)
                }
            }
        }



    })

}
