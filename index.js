'use strict'

class Register {

  constructor () {
    this._promise = {}
    this._resolve = {}
  }

  _prepare (name) {
    if (this._promise[name]) {
      return
    }

    this._promise[name] = new Promise((resolve, reject) => {
      this._resolve[name] = resolve
    })
  }

  get (name) {
    this._prepare(name)
    return this._promise[name]
  }

  set (name, item) {
    this._prepare(name)
    this._resolve[name](item)
  }

  has (name) {
    return name in this._promise
  }

  unset (name) {
    delete this._promise[name]
    delete this._resolve[name]
  }

}

module.export = Register