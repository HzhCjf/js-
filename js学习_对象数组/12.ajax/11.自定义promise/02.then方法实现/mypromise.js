class MyPromise {
    constructor(handle) {
        this['[[PromiseState]]'] = "pending";
        this['[[PromiseResult]]'] = undefined;
        this.resolveFn = null;
        this.rejecteFn = null;
        handle(this.#reslove.bind(this), this.#reject.bind(this));
    }
    #reslove(res) {
        this['[[PromiseState]]'] = "fufilled";
        this['[[PromiseResult]]'] = res;
        setTimeout(() => {
            this.resolveFn(res);  // 执行then的里 onResolved 函数 
        })
    }
    #reject(err) {
        this['[[PromiseState]]'] = "rejected";
        this['[[PromiseResult]]'] = err;
        setTimeout(() => {
            this.rejecteFn(err);
        });
    }
    then(onResolved, onRejected) {
        // onResolved();
        // 把 onResolved和 onRejected函数 保存起来了 
        this.resolveFn = onResolved;
        this.rejecteFn = onRejected;
    }

}