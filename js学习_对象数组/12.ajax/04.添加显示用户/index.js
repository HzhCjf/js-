const express = require("express");
const bodyParser = require("body-parser");
const userModel = require("./model/usersModel");
let app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})
app.post("/userPost", async (req, res) => {
    console.log(req.body);
    let {username,age}=req.body
    let adddata = {
        username,
        age:Number(age)
    }
    try{
        await userModel.create(adddata)
        res.json({
            info:'添加成功',
            status:1
        })
    }catch(err){
        res.json({
            info:'添加失败',
            status:0,
            err
        })
    }
})


app.get("/show",async (req,res)=>{
    // let users = await userModel.find();
    // res.json(users);
    res.sendFile(__dirname+"/views/showusers.html");

})

app.get("/getdata",async (req,res)=>{
    let users = await userModel.find();
    res.json(users);
})




// 删除用户的接口 
app.get("/deluser", async (req, res) => {
    let { _id } = req.query;
    console.log(_id);
    try {
        await userModel.deleteOne({ _id });
        let userdata = await userModel.find();
        res.json({
            info: "成功",
            status: 1,
            userdata
        })
    } catch (err) {
        res.json({
            info: "删除失败",
            status: 0,
            err
        })
    }

})
app.listen(8989)