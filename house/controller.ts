import {Blind} from "./blind";
import {Heater} from "./heater";
import {Controllable} from "./controllable";

class Controller {
    constructor(private devices: Controllable[]) {}

    addDevice(controllable: Controllable): void {
        this.devices.push(controllable);
    }

    startDevice(index: number): void {
        this.devices[index].start();
    }
}

const b1: Blind = new Blind();
const h1: Heater = new Heater();

const controller: Controller = new Controller([]);
controller.addDevice(b1);
controller.addDevice(h1);
controller.addDevice(new Heater());

controller.startDevice(1);