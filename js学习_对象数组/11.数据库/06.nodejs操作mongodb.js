// nodejs 操作mongodb数据库 ； 
// 借助 mongoose 模块 
// mongo  mongod   mongoose   mongodb
const mongoose = require("mongoose");
// 第一步 ： 连接数据库 
// connect("mongodb://127.0.0.1:27017/数据库名称");
mongoose.connect("mongodb://127.0.0.1:27017/myusers").then(() => {
    console.log("数据库连接成功")
}).catch(err => {
    console.log("数据库连接失败", err);
})

// 第二步：创建骨架

let schema = mongoose.Schema({
    username: String,
    age: Number,
    gender: String
})

// 第三步 ：创建模型；
// module : 模块 。  model ：模型
// 注意 ： 集合名称 只能是复数；
let model = mongoose.model("users", schema);

// 第四步： 操作model ： 增、删、改、查 ；
// 一、增加 : 所有通过 mongoose添加的数据都会加上一个 __v字段；
let obj = {
    username: "node名字222",
    age: 23,
    gender: "男"
};
    // model.create(obj).then(res=>{
    //     console.log(res);
    // }).catch(err=>{
    //     console.log(err);
    // })

    (async function () {
        try {
            let res = await model.create(obj);
            console.log(res);
        }catch(err){
            console.log(err);
        }
    })();


// 二、删除 
// model.deleteMany({age:23}).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err);
// })

// 三、修改 ： 
model.updateMany({age:30},{$set:{username:"修改了222"}}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})


// 四、查询
// model.find({age:{$gt:20}},{username:1,age:1,_id:0}).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err);
// })

model.find().skip(2).limit(5).sort({age:-1}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
