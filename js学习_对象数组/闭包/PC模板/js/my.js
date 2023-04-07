// 一.渲染手机信息
let priceArea = document.querySelector('.priceArea')
priceArea.innerHTML = `<!-- 手机详细 -->
<h3 class="title">${goodData.goodsDetail.title}</h3>
<p class="con1">${goodData.goodsDetail.recommend}</p>
<div class="price">
    <div class="priceDetail">
        <p>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</p>
        <p>￥ <span>${goodData.goodsDetail.price}</span> 元</p>
    </div>
    <div class="buy">
        <p>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</p>
        <p><span>${goodData.goodsDetail.promoteSales.type}</span>${goodData.goodsDetail.promoteSales.content}</p>
    </div>
</div>
<div class="support">
    <div class="supportDetail">
        <p>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</p>
        <p>${goodData.goodsDetail.support}</p>
    </div>
    <div class="address">
        <p>配&nbsp;送&nbsp;至</p>
        <p>${goodData.goodsDetail.address}</p>
    </div>
</div>
<!-- 手机详细结束 -->`


let myprice;
// 二.渲染导航栏
// 获取导航栏
let conPoint = document.querySelector('.conPoint')
// 重置导航栏内容
conPoint.innerHTML = ``
// 获取data导航栏里信息对象数组
let path = goodData.path
// 循环导航栏信息
path.forEach(function(item){
    // 创建a标签
    let aEle = document.createElement('a')
    // 把导航栏内容填入a标签
    aEle.innerHTML = item.title
    // 把导航栏内容的链接位置填入a标签的src里面
    aEle.src = item.url
    // 追加到导航栏
    conPoint.appendChild(aEle)
})



// 三.渲染手机型号
// 六.计算价钱:选中dd的时候记录dd所在的行和列
let chooseArea = document.querySelector('.chooseArea')
// 重置内容
chooseArea.innerHTML = ``
// 存放被选中的型号
let chioseTypeArr = []
// 获取到手机型号信息,对象数组
goodData.goodsDetail.crumbData.forEach(function(item,k){//行
    // 创建dl
    let dlEle = document.createElement('dl')
    // 创建dt,存放手机型号的标题
    let dtEle = document.createElement('dt')
    dtEle.innerHTML = item.title
    dlEle.appendChild(dtEle)
    // 循环手机型号对象数组
    item.data.forEach(function(item,key){//列
        // 创建dd
        let ddEle = document.createElement('dd')
        // 放入手机信号
        ddEle.innerHTML = item.type
        // 默认把型号dd的第一个存放在chioseTypeArr
        if(key === 0){
            ddEle.k = k//k记录dd所在的行
            ddEle.kk = key//kk记录dd所在的列

            ddEle.showText = ddEle.innerHTML//自定义属性
            chioseTypeArr.push(ddEle)
        }
        dlEle.appendChild(ddEle)

        // 为dd做点击事件
        ddEle.onclick =function(){
            this.k = k  //记录行
            this.kk = key //记录列

            this.showText = this.innerHTML
            // 当前点击的dd替换之前的
            chioseTypeArr[k] = this
            // 获取所有的dd
            let dds = dlEle.querySelectorAll('dd')
            dds.forEach(function(item){
                // 点击时,当前行的所有dd颜色重置
                item.style.color = '#666'
            })
            // 当前dd颜色改变为红色
            this.style.color = 'red'
            renderChioseType(chioseTypeArr)
        }
    })
    chooseArea.appendChild(dlEle)
})



// 四.渲染选择的型号
//五.删除选中的型号
renderChioseType(chioseTypeArr)
function renderChioseType(chioseTypeArr){
    let price = goodData.goodsDetail.price//初始价钱


    // 获取到型号标签容器
    let chooseInsert = document.querySelector('.chooseInsert')
    // 内容重置
    chooseInsert.innerHTML = ''
    chioseTypeArr.forEach(function(item,key){
        if(item.showText){
            // 创建mark元素
            let markEle = document.createElement('mark')
            // 内容为被点击的型号内容
            markEle.innerHTML = `${item.showText}<a>X</a>`
            chooseInsert.appendChild(markEle)

            // 获取删除
            let delEle = markEle.querySelector('a')
            delEle.onclick = function() {
                // 直接清空mark内容
                chioseTypeArr[key].showText = ''
                renderChioseType(chioseTypeArr)

                // 去掉当前删除行的样式
                let dls = document.querySelectorAll('.chooseArea dl')
                let dds = dls[key].querySelectorAll('dd')
                dds.forEach(function(item){
                    item.style.color = "#666"
                })
            }

            // 计算价钱
            price += goodData.goodsDetail.crumbData[item.k].data[item.kk].changePrice
        }
        

        
    })
    // 获取产品的数量
    let productNum = document.querySelector('.num input')
    price *= productNum.value
    // 替换之前的价钱
    document.querySelector('.priceDetail span').innerHTML = price


    document.querySelector('.master p').innerHTML = '￥' + price
    myprice = parseInt(document.querySelector('.priceDetail span').innerHTML)
    countPrice()
}



// 数量的加和减
let plusEle = document.querySelector('.plus')
let mins = document.querySelector('.mins')
let myinput = document.querySelector('.num input')

// 加操作
plusEle.onclick = function(){
    myinput.value++;
    renderChioseType(chioseTypeArr)
}

// 减操作
mins.onclick = function(){
    if(myinput.value > 1){
        myinput.value--;
        renderChioseType(chioseTypeArr)
    }
}


function countPrice(){
    let suits = document.querySelectorAll('.suits input')
    suits.forEach(function(item){
        if(item.checked){
            myprice += parseInt(item.value)
        }
    })
    document.querySelector('.result .price').innerHTML = '￥' + myprice
}
countPrice()



// 计算组合价钱
let suits = document.querySelectorAll('.suits input')
suits.forEach(function(item){
    item.onclick = function(){
        if(this.checked){
            myprice += parseInt(this.value)
        }else{
            myprice -= parseInt(this.value)
        }
        document.querySelector('.result .price').innerHTML = '￥' + myprice
    }
})







// 一、让 遮罩层 跟随鼠标移动 ；
// 鼠标移入的时候 遮罩层 显示  
// 鼠标移除的时候 遮罩层 隐藏 
var smallArea = document.querySelector(".smallArea");
var mask = document.querySelector(".mask");
var bigArea = document.querySelector(".bigArea");

smallArea.onmouseenter = function(){
    mask.style.display  ="block";
    bigArea.style.display = "block";
}

smallArea.onmouseleave = function(){
    mask.style.display  ="none";
    bigArea.style.display = "none";

}

// 让遮罩层 跟随鼠标移动 ；

// 遮罩层的边界限定 ；
// 放大图 对应的移动 ；1.移入 smallArae的时候  大图 需要显示 ，否则 隐藏；  2. 大图 需要 跟随小图的移动而移动 ；

smallArea.onmousemove = function(e){
    var x = e.clientX - this.getBoundingClientRect().left;
    var y = e.clientY - this.getBoundingClientRect().top;

    // 没有定位  ，相对于 浏览器 
    // 有定位 ，相对于父级 ；
    var disx = x - mask.offsetWidth/2;
    var disy = y  - mask.offsetHeight/2;

    if(disx<0){
        disx = 0;
    }

    if(disx>smallArea.offsetWidth-mask.offsetWidth){
        disx = smallArea.offsetWidth-mask.offsetWidth;
    }

    if(disy<0){
        disy = 0;
    }

    if(disy>smallArea.offsetHeight - mask.offsetHeight){
        disy = smallArea.offsetHeight - mask.offsetHeight
    }
    // 获取大图的宽度 
    var bigAreaImg = bigArea.querySelector("img");
    var w = bigAreaImg.width;
    var h = bigAreaImg.height;
    // console.log(w);
    var bigX = (disx/smallArea.offsetWidth)*w;
    var bigY = (disy/smallArea.offsetHeight)*h;
    bigAreaImg.style.left = -bigX + "px";
    bigAreaImg.style.top = -bigY + "px";

    mask.style.left = disx +  "px"
    mask.style.top = disy + "px";
}