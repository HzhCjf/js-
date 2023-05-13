const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routers/usersRouter");
const loginRouter = require("./routers/loginRouter");
const advRouter = require("./routers/advRouter");
const { expressjwt } = require("express-jwt");

const static = express.static;
const app = express();
app.use(static("./static"));
app.use(bodyParser.json());
app.use(expressjwt({secret:"mytoken",algorithms:['HS256']}).unless({path:[/^\/login\//,/\.png$/] }))

//  /admin/test    /admin/adduser
app.use("/admin",userRouter);
app.use("/login",loginRouter);
app.use("/adv",advRouter);


app.listen(8989);
