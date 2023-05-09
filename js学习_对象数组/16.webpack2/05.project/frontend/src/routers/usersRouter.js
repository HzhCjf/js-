// 和用户操作有关的路由
import users from '@/views/users.ejs';
import axios from '@/api/index.js';
// 获取最新数据 ： 1.页面加载需要获取最新数据 2.添加成功之后获取最新数据；  3.删除之后获取最新数据；
async function getusers(res) {
    let { data:usersdata } = await axios.get("/admin/getusers");
    // console.log(data);
    console.log(axios.defaults.baseURL);
    res.render(users({
        usersdata,
        baseURL:axios.defaults.baseURL
    }));
    addEvent();

}


function addEvent() {


    let btn = document.querySelector(".adduer");
    let adduermodel = document.querySelector(".adduermodel");
    let mask = document.querySelector(".mask");
    let closebtn = document.querySelector(".closebtn");
    console.log(btn);
    btn.onclick = function () {
        // console.log("点击了添加用户");
        // 显示 对话框和蒙版 
        adduermodel.style.display = "block";
        mask.style.display = "block";


    }

    closebtn.onclick = function () {
        adduermodel.style.display = "none";
        mask.style.display = "none";
    }


    // 选择图片的时候 图片需要预览 ；
    let imgFileEle = document.querySelector(".imgFile");
    let imgshowEle = document.querySelector(".imgshow");
    imgFileEle.onchange = function () {
        // console.log("选择了图片");
        let imgfile = this.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imgfile);
        reader.onload = function () {
            console.log(this.result);  // 把图片转成base64格式
            imgshowEle.innerHTML = "";
            let imgEle = document.createElement("img");
            imgEle.style.width = "100%";
            imgEle.style.height = "100%";
            imgEle.src = this.result;
            imgshowEle.appendChild(imgEle);

        }
    }


    // 点击上传文件 和数据 
    let btnSubmit = document.querySelector(".btn");
    let usernameEle = document.querySelector(".username")
    let pwd1Ele = document.querySelector(".pwd");
    let pwd2Ele = document.querySelector(".repeatpwd");
    btnSubmit.onclick = async function () {
        let uname = usernameEle.value;
        let pwd1 = pwd1Ele.value;
        let pwd2 = pwd2Ele.value;
        let img = imgFileEle.files[0];
        if (pwd1 === pwd2) {
            // 把数据提交给后端 ；
            let form = new FormData();
            form.append("uname", uname);
            form.append("pwd", pwd1);
            form.append("img", img);
            // 利用 axios发送 form ；
            // /api/admin/adduser
            let { data: { status, info } } = await axios.post("/admin/adduser", form);
            // console.log(data);
            if (status === 1) {
                adduermodel.style.display = "none";
                mask.style.display = "none";
                // 添加数据成功



            } else {
                // 添加数据失败
                alert(info)
            }

        } else {
            alert("两次输入密码不同");
        }



    }


}


export default function (router) {
    router.route("/admin/users", (req, res) => {
        getusers(res);
        // 获取添加用户的按钮 



    })




}