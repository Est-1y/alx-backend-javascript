import Car from './10-car';

//EVCar class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // range property.
  get range() {
    return this._range;
  }

  // cloning the EVCar instance
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
