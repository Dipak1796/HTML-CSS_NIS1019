import { Payload } from "./Payload.js";
//Astronaut Class
export class Astronaut implements Payload{
    massKg: number=0;
    name:string='';
    //constructor
    constructor(_mass:number,_name:string){
        this.massKg=_mass;
        this.name=_name;
    }
}