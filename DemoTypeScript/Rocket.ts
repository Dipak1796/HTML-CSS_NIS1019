import { Payload } from "./Payload.js";

import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";

export class Rocket{
    rocketName:string='';
    rocketCapacity:number=0;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];

    //constructor
    constructor(_rname:string,_capacity:number){
        this.rocketName=_rname;
        this.rocketCapacity=_capacity;
    }

    sumMass(items:Payload[]):number{
       let sum:number=0;
        items.forEach(e => {
            sum+=e.massKg;
        });
        return sum;  
    }

    currentMassKg():number{ 
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    }

    canAdd(item:Payload):boolean{
        if(this.currentMassKg()+item.massKg <= this.rocketCapacity)
        return true;
        else
        return false;
    }
    addCargo(cargo:Cargo):boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
        return true;
        }
        else
        return false;
    }
    addAstronaut(astronaut:Astronaut):boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
        return true;
        }
        else
        return false;
    }
}