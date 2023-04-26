const express = require('express')
const bodyParser = require('body-parser')
let app = express() 

app.use(bodyParser.json())
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})
app.post('/post',(req,res)=>{
    console.log(req.body);
})
app.listen(8989)