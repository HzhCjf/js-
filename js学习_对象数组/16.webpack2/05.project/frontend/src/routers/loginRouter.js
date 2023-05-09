

import login from '@/views/login.ejs';
export default function(router){
    router.route("/login",(req,res)=>{
        res.render(login({title:"hello"}));  // data.title
    })
}