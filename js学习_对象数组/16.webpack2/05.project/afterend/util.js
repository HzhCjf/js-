const { IncomingForm } = require("formidable");
const path = require("path");

let form = new IncomingForm({
    uploadDir: path.resolve(process.cwd(), "./static"),
    keepExtensions: true
})

module.exports = {
    uploadfile: function (req) {
        return new Promise((resolve, reject) => {
            form.parse(req, (err, fileds, file) => {
                if (err) {
                    reject(err);
                    return console.log(err);
                }
                // console.log(fileds, file);
                let obj = {
                    ...fileds,
                    newFilename: file.img.newFilename
                }
                resolve(obj);
            })
        })
    }
}