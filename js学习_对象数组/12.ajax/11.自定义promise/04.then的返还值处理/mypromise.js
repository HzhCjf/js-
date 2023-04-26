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
        setTimeout(() => {
            let cb;
            while (cb = this.resolveQueue.shift()) {
                cb(res)
            }
        })
    }
    #reject(err) {
        this['[[PromiseState]]'] = "rejected";
        this['[[PromiseResult]]'] = err;
        setTimeout(() => {
            let cb;
            while (cb = this.rejectQueue.shift()) {
                cb(err)
            }
        });
    }
    then(onResolved, onRejected) {
        return new MyPromise((reslove, reject) => {
            this.resolveQueue.push(res => {
                try {
                    let reslut = onResolved(res); // 没有立刻执行，调用#resolve的时候执行的
                    if (typeof reslut === "undefined") {
                        console.log("1、then的回调没有任何返还")
                        reslove();
                    } else if (reslut instanceof MyPromise) {
                        // reslut 和 MyPromise类有关系 ；
                        console.log("2.返还的mypromise对象");
                        // reslut.then(reslove,reject);
                        reslut.then(val => {
                            reslove(val);
                        }, err => {
                            reject(err);
                        })
                    } else {
                        console.log("3.返还普通值");
                        reslove(reslut);
                    }
                } catch (err) {
                    // 捕捉错误 ，把错误的值作为 失败状态promise对象的值；
                    console.log("4.抛出错误的情况");
                    reject(err);
                }

            });

            this.rejectQueue.push(err => {
                try {
                    let reslut = onRejected(err); // 没有立刻执行，调用#resolve的时候执行的
                    if (typeof reslut === "undefined") {
                        console.log("then的回调没有任何返还")
                        reslove();
                    } else if (reslut instanceof MyPromise) {
                        // reslut 和 MyPromise类有关系 ；
                        console.log("返还的mypromise对象");
                        // reslut.then(reslove,reject);
                        reslut.then(val => {
                            reslove(val);
                        }, err => {
                            reject(err);
                        })
                    } else {
                        console.log("返还普通值");
                        reslove(reslut);
                    }
                } catch (err) {
                    // 捕捉错误 ，把错误的值作为 失败状态promise对象的值；
                    reject(err);
                }

            });
        })





    }

}