import {Controllable} from "./controllable";

export class Heater implements Controllable{
    private isOn: boolean = false;
    start(): void{
        this.isOn = true;
        console.log("Starting Heater");
    }
}