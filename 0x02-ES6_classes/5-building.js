// Function class named Building
export default class Building {
  // Const function
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // sqft property.
  get sqft() {
    return this._sqft;
  }
}
