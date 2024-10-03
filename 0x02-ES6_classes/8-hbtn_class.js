export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // size.
  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  // location
  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }

  // value and string methods
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
