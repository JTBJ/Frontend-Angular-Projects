"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var circle = new circle_1.Circle(5, 10, 20);
var rectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes ... initially empty
var shapes = [];
// add the shapes to the array
shapes.push(circle);
shapes.push(rectangle);
// loop through the array and display the information for each shape
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var tempShape = shapes_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
}
