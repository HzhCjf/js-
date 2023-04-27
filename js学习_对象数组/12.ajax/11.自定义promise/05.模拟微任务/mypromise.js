class MyPromise {
    constructor(handle) {
        this['[[PromiseState]]'] = "pending";
        this['[[PromiseResult]]'] = undefined;
        this.resolveQueue = [];
        this.rejectQueue = [];
        handle(this.#reslove.bind(this), this.#reject.bind(this));
    }
    #reslove(res) {
        this['[[PromiseState]]'] = "fufilled";
        this['[[PromiseResult]]'] = res;
        let fn = () => {
            let cb;
            while (cb = this.resolveQueue.shift()) {
                cb(res)
            }
        }
        // setTimeout(fn);

        // 异步的微任务 执行 then里的回调函数 ；
        let ob = new MutationObserver(fn);
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute("myattr","val");

    }
    #reject(err) {
        this['[[PromiseState]]'] = "rejected";
        this['[[PromiseResult]]'] = err;
        let fn = () => {
            let cb;
            while (cb = this.rejectQueue.shift()) {
                cb(err)
            }
        }

        // setTimeout(fn);
        let ob = new MutationObserver(fn);
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute("myattr","val");
    }
    then(onResolved, onRejected) {
        return new MyPromise((reslove, reject) => {
            this.resolveQueue.push(res => {
                try {
                    let reslut = onResolved(res); // 没有立刻执行，调用#resolve的时候执行的
                    if (typeof reslut === "undefined") {
                        // console.log("1、then的回调没有任何返还")
                        reslove();
                    } else if (reslut instanceof MyPromise) {
                        // reslut 和 MyPromise类有关系 ；
                        // console.log("2.返还的mypromise对象");
                        // reslut.then(reslove,reject); 简写形式
                        reslut.then(val => {
                            reslove(val);
                        }, err => {
                            reject(err);
                        })
                    } else {
                        // console.log("3.返还普通值");
                        reslove(reslut);
                    }
                } catch (err) {
                    // 捕捉错误 ，把错误的值作为 失败状态promise对象的值；
                    // console.log("4.抛出错误的情况");
                    reject(err);
                }

            });

            this.rejectQueue.push(err => {
                try {
                    let reslut = onRejected(err); // 没有立刻执行，调用#resolve的时候执行的
                    if (typeof reslut === "undefined") {
                        // console.log("then的回调没有任何返还")
                        reslove();
                    } else if (reslut instanceof MyPromise) {
                        // reslut 和 MyPromise类有关系 ；
                        // console.log("返还的mypromise对象");
                        // reslut.then(reslove,reject);
                        reslut.then(val => {
                            reslove(val);
                        }, err => {
                            reject(err);
                        })
                    } else {
                        // console.log("返还普通值");
                        reslove(reslut);
                    }
                } catch (err) {
                    // 捕捉错误 ，把错误的值作为 失败状态promise对象的值；
                    reject(err);
                }

            });
        })
    }
    static resolve(val) {
        return new MyPromise((reslove, reject) => {
            reslove(val);
        })
    }
    static reject(err) {
        return new MyPromise((undefined, reject) => {
            reject(err);
        })
    }
    static race(arr){
        return new MyPromise((reslove,reject)=>{
            arr.forEach(item=>{
                // item.then(res=>{
                //     reslove(res);
                // },err=>{
                //     reject(err);
                // })
                item.then(reslove,reject)
            })
        })

    }

    static all(arr) {
        return new MyPromise((reslove,reject)=>{
            let count = 0;
            let resarr = []; // 收集结果值的数据
            arr.forEach(item=>{
                item.then(res=>{
                    count++;
                    resarr.push(res);
                    if(count===arr.length){
                        reslove(resarr);
                    }
                },err=>{
                    reject(err);
                })
            })
        })
    }

    static allSettled(arr) {
        return new MyPromise((reslove,reject)=>{
            let count = 0;
            let resarr = []; // 收集结果值的数据
            arr.forEach(item=>{
                item.then(res=>{
                    count++;
                    let obj = {
                        status:"fufilled",
                        value:res
                    }
                    resarr.push(obj);
                    if(count===arr.length){
                        reslove(resarr);
                    }
                },err=>{
                    count++;
                    let obj = {
                        status:"rejected",
                        reson:err
                    }
                    resarr.push(obj);
                    if(count===arr.length){
                        reslove(resarr);
                    }
                })
            })
        })
    }
    finally(cb) {
        this.then(()=>{
            cb();
        },()=>{
            cb();
        })
    }
    catch(cb){
        this.then(undefined,cb);
    }
}


// 1.复习 2.news改成 ajax ，添加一个上传图片的需求； （添加新闻 、分页 ）  3.all、allsettled 方法实现；