import {Notify} from "./notify";
import {Child} from "./child";
import {Chancellor} from "./chancellor";

export class God implements Notify {
    private name: string;
    getNotified: (Child | God | Chancellor)[] = [];

    constructor(name: string) {
        this.name = name;
    }

    notify(msg: string): void {
        console.log(`${this.name}: ${msg}`);
    }
}