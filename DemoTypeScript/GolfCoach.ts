import { ICoach } from "./ICoach.js";


export class GolfCoach implements ICoach{

    getDailyWorkOut(): string {
       return "hit 100 balls at the golf range.";
    }
    
}