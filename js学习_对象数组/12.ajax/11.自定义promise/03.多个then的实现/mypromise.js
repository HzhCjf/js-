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
            while(cb = this.resolveQueue.shift()){
                cb(res)
            }
        })
    }
    #reject(err) {
        this['[[PromiseState]]'] = "rejected";
        this['[[PromiseResult]]'] = err;
        setTimeout(() => {
            let cb;
            while(cb = this.rejectQueue.shift()){
                cb(res)
            }
        });
    }
    then(onResolved, onRejected) {
        this.resolveQueue.push(onResolved);
        this.rejectQueue.push(onRejected);
    }

}