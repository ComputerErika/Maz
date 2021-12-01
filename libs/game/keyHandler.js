define(function(require) { return Object.assign({}, require("./gameObject")(), {

  _keyDownFunc(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    } else if !(this.keys.includes(event.key)) {
      this.keys.push(event.key)
    }
    event.preventDefault();
  }

  _keyUpFunc(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    } else if (this.keys.includes(event.key)) {
      this.keys.splice(this.keys.indexOf(event.key))
    }
    event.preventDefault();
  }

  init() {
    document.addEventListener("keydown", this._keyDownFunc, true);
    document.addEventListener("keyup", this._keyUpFunc, true);
  }

  keys: []

})});
