import admin from '@/views/admin.ejs';
export default function(router){
    router.route("/admin",(req,res,next)=>{
        // res.render(admin());
        // res.subRoute()  ： 可以获取二级路由渲染的内容 
        next(admin({
            subrouter:res.subRoute(),
            url:req.url
        }))


        let lis = document.querySelectorAll('.menu-left li')
        lis.forEach((li,key)=>{
            li.onclick = function(){
                if(key === 0){
                    res.go('/admin/users')
                }else{
                    res.go('/admin/adv')
                }
            }
        })
    })
}