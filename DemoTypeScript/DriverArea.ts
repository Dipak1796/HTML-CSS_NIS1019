import { MainArea } from "./MainArea.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";


let sqare:Square=new Square(5);
let rectangle:Rectangle=new Rectangle(4,5);

let result:MainArea=new MainArea();

console.log("Area :"+result.calculateArea(sqare));
console.log("Area :"+result.calculateArea(rectangle));