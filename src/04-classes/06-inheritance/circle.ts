import { Shape } from "./shape";

export class Circle extends Shape {
  constructor(x: number, y: number, private _radius: number) {
    super(x, y);
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }

  // Method to get the distance between two points
  getDistance(another: Shape): number {
    let xDist = this.x - another.x;
    let yDist = this.y - another.y;

    return Math.sqrt(xDist * xDist + yDist * yDist);
  }

  getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }
}
