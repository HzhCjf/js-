// 和admin有关的路由
import admin from '@/views/admin.ejs';

export default function(router){
    router.route("/admin",(req,res,next)=>{
        let url = req.url.split("?")[0];
        console.log("req.url:",url);

        // res.render(admin());
        // res.subRoute()  ： 可以获取二级路由渲染的内容 
        next(admin({  // 渲染模板
            subrouter:res.subRoute() ,
            url,
            uname:localStorage.getItem("uname")

        }))

        let lis = document.querySelectorAll(".menu-left li");
        // console.log(lis);
        lis.forEach((li,key)=>{
            li.onclick = function(){
                // console.log("点击了按钮",key);
                if(key===0){
                    // console.log(li);
                    res.go("/admin/users");
                }else{
                    // console.log(li);
                    // li.style.color = "red";  // 设置无效，会重新渲染页面
                    res.go("/admin/adv");
                }
            }
        })



    })
}