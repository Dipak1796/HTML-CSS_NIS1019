import { MainArea } from "./MainArea.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";
let sqare = new Square(5);
let rectangle = new Rectangle(4, 5);
let result = new MainArea();
console.log("Area :" + result.calculateArea(sqare));
console.log("Area :" + result.calculateArea(rectangle));
