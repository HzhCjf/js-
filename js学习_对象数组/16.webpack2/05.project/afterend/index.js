const express = require("express");
const userRouter = require("./routers/usersRouter");
const static = express.static;
const app = express();
app.use(static("./static"));

//  /admin/test    /admin/adduser
app.use("/admin",userRouter);


app.listen(8989);
