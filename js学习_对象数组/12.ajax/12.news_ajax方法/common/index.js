const formidable = require("formidable");
let form = new formidable.IncomingForm({
    uploadDir: process.cwd() + "/static/img",
    keepExtensions: true
});
module.exports = {
    fileParse(req) {
        return new Promise((resolve, reject) => {
            form.parse(req, async (err, fileds, file) => {
                if (err) {
                    reject(err);
                } else {
                    let obj = {
                        ...fileds,
                        newsimg: file.newsimg.newFilename
                    }
                    resolve(obj)
                }
            })
        })
    }
}