import { ICoach } from "./ICoach.js";

export class CricketCoach implements ICoach{
    getDailyWorkOut(): string {
        return "Practice your spin bowling technique.";
    }
    
}