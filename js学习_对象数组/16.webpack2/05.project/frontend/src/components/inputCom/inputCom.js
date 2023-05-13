// 存放组件里和 js  及html 有关的内容
// 引入组件相关的样式 
import './inputstyle.css';
//  HTMLElement 自动继承 自定义事件 ，EventTarget
class InputCom extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<div class="mask"></div>
        <div class="adduermodel">
            <div><span class="closebtn">X</span></div>
            <h3>添加广告</h3>
            <div>广告名称 &nbsp; ： <input class="inputstyle username" type="text" /></div>
            <div class="uploadContainer">缩略图：<span class="fileinput-button">
                    <span>上传图片</span>
                    <input class="imgFile" type="file" name="" />
                </span>
                <div class="imgshow">
                    <!-- <img width="100%" height="100%" src="./img/img.png" alt=""> -->
                </div>
            </div>
            <div>
                <button class="btn" type="submit">提交</button>
            </div>
        </div>`;
        this.type = "add";  // 添加操作 
        this.mask = this.querySelector(".mask");
        this.adduermodel =  this.querySelector(".adduermodel");
        let closebtn = document.querySelector(".closebtn");
        closebtn.onclick = ()=>{  // 点击关闭 ，关闭输入框 
            this.closeBtn();
        }
        this.showImg();  // 图片预览
        this.submitdata(); // 提交数据
    }
    // 显示输入框
    showInput(){
        this.mask.style.display = "block";
        this.adduermodel.style.display = "block";
    }
    // 关闭输入框
    closeBtn(){
        this.mask.style.display = "none";
        this.adduermodel.style.display = "none";
    }
    // 图片预览
    showImg(){
        let imgFileEle = this.querySelector(".imgFile");
        this.imgFileEle = imgFileEle;
        // 图片预览 
        let that = this;
        imgFileEle.onchange = function () {
            let FR = new FileReader();
            FR.readAsDataURL(this.files[0]);
            FR.onload = function () {
                console.log(this.result);  // 获取base64 格式图片
                let imgshow = that.querySelector(".imgshow");
                imgshow.innerHTML = `<img style='width:100%' height='100%' src='${this.result}' />`
            }
        }
    }
    // 提交数据
    submitdata(){
        let advname = this.querySelector(".username");
        this.advname = advname;
        let btn = this.querySelector(".btn");
        btn.onclick = ()=>{
            let obj;
            if(this.type==="add"){
                // 添加操作
                    obj = {
                        advname:advname.value,
                        img:this.imgFileEle.files[0]
                    }
            }else{
                // 更新操作
                if(this.imgFileEle.files[0]){
                    obj = {
                        advname:advname.value,
                        img:this.imgFileEle.files[0],
                        _id:this._id
                    }
                }else{
                    obj = {
                        advname:advname.value,
                        _id:this._id
                    }
                }
            }


            this.dispatchEvent(new CustomEvent("submitdata",{detail:obj}))
        }
    }
    // 设置输入框的内容
    setValue(title,advname,imgurl,_id){
        this.querySelector(".adduermodel h3").innerHTML = title;
        this.advname.value = advname;
        let imgshow = this.querySelector(".imgshow");
        this._id = _id;
        imgshow.innerHTML = `<img style='width:100%' height='100%' src='${imgurl}' />`;
    }
}

customElements.define("input-com",InputCom)