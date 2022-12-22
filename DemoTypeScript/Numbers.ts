import { IFirst } from "./IFirst";
import { ISecond } from "./ISecond";

export class Numbers implements IFirst,ISecond{

    num:number=0;

    getValue(): number {
        return this.num;
    }
    display(): string {
       return "This is Number Class";
    }
    demo(): number {
        return this.num;
    }
    
}