// 和登录有关的路由
import login from '@/views/login.ejs';
import axios from "@/api/index.js";
export default function (router) {
    // 创建路由  
    router.route("/login", (req, res) => {
        res.render(login({ title: "hello" }));  // data.title

        // 一、校验用户名是否正确  ；
        let usernameEle = document.querySelector(".username");
        let exchangeEle = document.querySelector(".exchange");
        exchangeEle.innerHTML = "";
        usernameEle.onblur = async function () {
            // 失去焦点校验用户名是否正确；
            let uname = this.value;
            if (uname !== "") {
                let { data: { status, info } } = await axios.get("/login/checkname", { params: { uname } })
                // console.log(data);
                if (status === 1) {
                    exchangeEle.innerHTML = info;
                    exchangeEle.style.color = "green";
                } else if (status === 2) {
                    exchangeEle.innerHTML = info;
                    exchangeEle.style.color = "red";
                } else {
                    alert(info);
                }
            } else {
                alert("用户名不能为空");
            }
        }



        // 获取form表单
        let formEle = document.querySelector("form");
        formEle.onsubmit = function (e) {
            // e.cancelable = true;
            // e.stopPropagation();
            e.preventDefault();
            // return false;
            // e.returnValue = false;
        }

        // 获取用户名和密码 提交到后端校验
        let pwdEle = document.querySelector(".pwd");
        let loginEle = document.querySelector(".loginStyle");
        loginEle.onclick = async function () {
            let uname = usernameEle.value;
            let pwd = pwdEle.value;
            let { data :{status,info,token} } = await axios.post("/login/checkuser", { uname, pwd });
            // console.log(data)
            // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteW5hbWUiOiJoZWxsbyIsImlhdCI6MTY4MzcwODM1NiwiZXhwIjoxNjgzNzE1NTU2fQ.zmOkq6idDMydHyivZ1XIzqImi-TwOwHpTvVgT-rhguY
            if(status===1){
                console.log("用户名且密码正确",token);
                localStorage.setItem("token",token);
                // res.go("/admin/users");
                localStorage.setItem("uname",uname);
                window.location.href = "/admin/users";
            }else{
                alert(info);
            }
        }



    })
}