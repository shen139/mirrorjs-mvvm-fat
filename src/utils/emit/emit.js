class MVVMEmit {
    constructor()
    {
        this.listeners = {};
    }


    on(what, cb)
    {
        if (this.listeners[what] === undefined)
        {
            this.listeners[what] = [];
        }
        this.listeners[what].push(cb);
    }


    emit(what, params)
    {
        if (this.listeners[what])
        {
            this.listeners[what].map(cb => cb(params));
        }
    }
}


module.exports = MVVMEmit;
