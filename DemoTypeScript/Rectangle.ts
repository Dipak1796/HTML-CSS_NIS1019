import { IShape } from "./IShape.js";

export class Rectangle implements IShape{

     width:number=0;
     height:number=0;

     //constracture
     constructor(w:number,h:number){
        this.width=w;
        this.height=h;
     }
    area(): number {
        return this.height*this.width;
    }

}