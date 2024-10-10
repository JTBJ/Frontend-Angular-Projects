import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let shape = new Shape(10, 15);
let circle = new Circle(5, 10, 20);
let rectangle = new Rectangle(0, 0, 3, 7);

console.log(shape.getInfo());
console.log(circle.getInfo());
console.log(rectangle.getInfo());
