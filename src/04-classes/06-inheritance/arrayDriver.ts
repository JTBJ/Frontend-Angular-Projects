import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let shape = new Shape(10, 15);
let circle = new Circle(5, 10, 20);
let rectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes ... initially empty
let shapes: Shape[] = [];

// add the shapes to the array
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

// loop through the array and display the information for each shape
for (let tempShape of shapes) {
  console.log(tempShape.getInfo());
}
