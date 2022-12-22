import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";
//Create variable
let cargo = new Cargo(19, "Food");
let cargo1 = new Cargo(356, "Water");
let astronaut = new Astronaut(60, 'Dipak');
let astronaut1 = new Astronaut(70, 'Prajyot');
let rocket = new Rocket("Apolo16", 500);
console.log(rocket.addAstronaut(astronaut));
console.log(rocket.addCargo(cargo));
console.log(rocket);
console.log(rocket.addAstronaut(astronaut1));
console.log(rocket.addCargo(cargo1));
console.log(rocket);
