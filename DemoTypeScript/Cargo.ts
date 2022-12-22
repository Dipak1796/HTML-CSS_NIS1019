import { Payload } from "./Payload.js";
//Cargo Class
export class Cargo implements Payload{
    massKg: number=0;
    material:string='';
    //constructor
    constructor(_mass:number,_material:string){
        this.massKg=_mass;
        this.material=_material;
    }
    
}