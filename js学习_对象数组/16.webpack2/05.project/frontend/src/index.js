import SMERouter from 'sme-router'; // 引入router路由
const router = new SMERouter('app',"html5") ; // 实例化路由
import loginRouter from './routers/loginRouter';  
import adminRouter from './routers/adminRouter';
import usersRouter from './routers/usersRouter';
import advRouter from './routers/advRouter';
loginRouter(router)
adminRouter(router)
usersRouter(router)
advRouter(router)

// 其他路由跳转到login页面
router.route("*",(req,res)=>{
    res.go("/login");
})









