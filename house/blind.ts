import {Controllable} from "./controllable";

export class Blind implements Controllable{
    private isOn: boolean = false;
    start(): void{
        this.isOn = true;
        console.log("Starting Blinds");
    }
}