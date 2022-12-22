import { IShape } from "./IShape.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./Square.js";

export class MainArea{
   
    //method
    calculateArea(shape:IShape):any{
        return shape.area();
    }

}