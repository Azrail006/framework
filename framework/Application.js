const http =require('http');
const EventEmitter = require('events');


module.exports = class Application {
    constructor(){
   this.emitter = new EventEmitter();
   this.server = this._createserver()
    }


    use(middleware) {
        this.middleware.push(middleware);
    }


    listen(port, callbak) {
        this.server.listen(port, callbak)
    }

addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
        const endpoint = router.endpoints[path];
        Object.keys(endpoint).forEach((method) => {
            const handler = endpoint[method];
            this.emitter.on(this._getRouterMask(path, method), (req, res) => {
             this.middleware.forEach(middleware => middleware(req, res))
                handler(req, res)
        })
        })
    })
}


    _createserver() {
return http.createServer(((req, res) => {
    const emitted = this.emitter.emit(this._getRouterMask(req.url, req.method), req, res)
    if (!emitted) {
      res.end()
    }
    }))
    }
    _getRouterMask(path, method) {
        return `[${path}]:[${method}]`
    }
}