export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // name
  get name() {
    return this._name;
  }

  // getting the code
  get code() {
    return this._code;
  }

  // Object string
  toString() {
    return `[object ${this._code}]`;
  }
}
