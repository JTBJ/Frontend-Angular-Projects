export abstract class Shape {
  constructor(private _x: number, private _y: number) {}

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }

  getInfo(): string {
    return `x=${this._x}, y=${this._y}`;
  }

  // Abstract method to calculate the area of a shape
  abstract calculateArea(): number;

  // Method to get the distance between two points
  getDistance(another: Shape): number {
    let xDist = this.x - another.x;
    let yDist = this.y - another.y;

    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}
