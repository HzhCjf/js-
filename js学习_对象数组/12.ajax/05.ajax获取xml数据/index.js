const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/getxml", (req, res) => {
    // xml数据上面头部是固定写法 
    // xml 最外层一定需要一个容器标签 ；
    // xml 数据 需要设置返还头部 ： 为xml
    let xmlstr = `<?xml version="1.0" encoding="utf-8" ?>
                    <books>
                        <nodejs>
                            <name>nodejs从入门到精通</name>
                            <price>$6.3</price>
                        </nodejs>
                        <vuejs>
                            <name>vuejs从入门到精通</name>
                            <price>$7.3</price>
                        </vuejs>
                    </books>
                `;
        res.setHeader("Content-Type","application/xml");
        res.send(xmlstr);
            // res.json()   content-type  : application/json
})

app.listen(8989);