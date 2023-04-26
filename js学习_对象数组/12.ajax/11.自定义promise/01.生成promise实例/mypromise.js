class MyPromise{
    constructor(handle){
        this['[[PromiseState]]'] = "pending";
        this['[[PromiseResult]]'] = undefined;
        // console.log(this);
        // handle(function(res){
        //     this['[[PromiseState]]'] = "fufilled";
        //     this['[[PromiseResult]]']  = res;
        // }.bind(this),function(err){
        //     this['[[PromiseState]]'] = "rejected";
        //     this['[[PromiseResult]]']  = err;
        // }.bind(this));
        handle(this.#reslove.bind(this),this.#reject.bind(this));
    }
    #reslove(res){
        this['[[PromiseState]]'] = "fufilled";
        this['[[PromiseResult]]']  = res;
    }
    #reject(err){
        this['[[PromiseState]]'] = "rejected";
        this['[[PromiseResult]]']  = err;
    }
}