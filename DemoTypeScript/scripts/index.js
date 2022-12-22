"use strict";
//Astronaut Class
class Astronaut {
    //constructor
    constructor(_mass, _name) {
        this.massKg = 0;
        this.name = '';
        this.massKg = _mass;
        this.name = _name;
    }
}
//Cargo Class
class Cargo {
    //constructor
    constructor(_mass, _material) {
        this.massKg = 0;
        this.material = '';
        this.massKg = _mass;
        this.material = _material;
    }
}
//Rocket Class
class Rocket {
    //constructor
    constructor(_rname, _capacity) {
        this.rocketName = '';
        this.rocketCapacity = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.rocketName = _rname;
        this.rocketCapacity = _capacity;
    }
    sumMass(items) {
        let sum = 0;
        items.forEach(e => {
            sum += e.massKg;
        });
        return sum;
    }
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item) {
        if (this.currentMassKg() + item.massKg <= this.rocketCapacity)
            return true;
        else
            return false;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    }
}
