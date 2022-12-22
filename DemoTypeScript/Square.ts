import { IShape } from "./IShape.js";

export class Square implements IShape{

    side:number=0;
    //constructor
    constructor(s:number){
        this.side=s;
    }

    area(): number {
        return this.side*this.side;
    }
    
}