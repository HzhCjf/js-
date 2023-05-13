// 和广告操作有关的路由
import adv from '@/views/adv.ejs'
import axios from "@/api/index.js";
// 引入组件 
import "@/components/inputCom/inputCom.js"


async function getadvs(req, res) {

    // 通过地址栏获取当前页码 ；
    let newp;
    if (req.query) {
        let { p } = req.query;
        newp = p;
    } else {
        newp = 1;
    }
    // console.log("?",newp);


    let { data: { advdata, pageCount } } = await axios.get("/adv/getadvs", { params: { p: newp } });
    console.log("获取的数据:", pageCount);
    let url = axios.defaults.baseURL;
    console.log(url);
    res.render(adv({ advdata, url, pageCount }));
    addEvent(req, res);
}


function addEvent(req, res) {
    let addadvEle = document.querySelector(".addadv");
    // let mask = document.querySelector(".mask");
    // let adduermodel = document.querySelector(".adduermodel");
    let inputCom = document.querySelector("input-com");
    // 点击显示输入框
    addadvEle.onclick = function () {
        inputCom.showInput();  // 显示输入框 
        inputCom.type = "add";
    }

    inputCom.addEventListener("submitdata", async e => {
        if (inputCom.type === "add") {
            console.log("触发自定义事件:", e);
            let { advname, img } = e.detail;
            console.log(advname, img);
            let form = new FormData();
            form.append("advname", advname);
            form.append("img", img);
            let { data: { status } } = await axios.post("/adv/addadv", form);
            if (status === 1) {
                inputCom.closeBtn();
                getadvs(req, res);
            }
        } else if (inputCom.type === "update") {
            // 做更新操作 
            let { advname, img, _id } = e.detail;
            let form = new FormData();
            form.append("_id", _id);
            form.append("advname", advname);
            if (img) {
                form.append("img", img);
            }

            let { data: { status } } = await axios.patch("/adv/updateAdv", form);
            if (status === 1) {
                inputCom.closeBtn();
                getadvs(req, res);
            }
        }

    })


    // 实现修改逻辑 
    let updateEles = document.querySelectorAll(".update");
    updateEles.forEach(updateEle => {
        updateEle.onclick = function () {
            // 输入框显示出来 ；
            inputCom.showInput();
            inputCom.type = "update";
            let advname = this.getAttribute("advname");
            let _id = this.getAttribute("_id");
            let imgurl = this.getAttribute("imgurl")
            inputCom.setValue("修改广告", advname, imgurl, _id);
        }
    })



    // 实现删除逻辑 

    let delBtns = document.querySelectorAll(".delBtn");
    delBtns.forEach(item => {
        item.onclick = async function () {
            console.log("点击了删除按钮");
            let result = confirm("你确定删除吗?");
            if (result) {
                let _id = this.getAttribute("_id");
                let imgurl = this.getAttribute("imgurl");
                // console.log(_id,imgurl);
                let { data:{status} } = await axios.delete("/adv/delAdv", { params: { _id, imgurl } })
                // console.log(data)
                if(status===1){
                    getadvs(req, res);
                }
            }
        }
    })

    // 退出登录 
    let loginout = document.querySelector(".loginout");
    loginout.onclick = function(){
        // 清除 token  ，跳转到 login
        localStorage.removeItem("token");
        window.location.href = "/login";

    }




    // 点击分页的时候跳转 当前路由且携带页码的参数 ；

    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.onclick = function () {
            console.log(this.innerHTML);
            res.go("/admin/adv?p=" + this.innerHTML);
        }
    })

}


export default function (router) {

    router.route("/admin/adv", (req, res) => {
        // console.log("当前的页码是:",req.query);
        getadvs(req, res);


    })
}