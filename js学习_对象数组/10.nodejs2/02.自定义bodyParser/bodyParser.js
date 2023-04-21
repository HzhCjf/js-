const qs = require("querystring");
module.exports = {
    urlencoded: function () {
        return function (req, res, next) {
            let str = "";
            req.on("data", chunk => {
                str += chunk;
            })
            req.on("end", () => {
                // console.log(str);
                let obj = qs.parse(str);
                // console.log(obj);
                req.body = obj;
                next();
            })
        }
    }
}