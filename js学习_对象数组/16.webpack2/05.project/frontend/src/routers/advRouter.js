import adv from '@/views/adv.ejs'
export default function(router){
    router.route("/admin/adv",(req,res)=>{
        res.render(adv());
    })
}