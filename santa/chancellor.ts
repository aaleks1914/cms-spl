import {Child} from "./child";
import {God} from "./god";

export class Chancellor {
    private name: string;
    private age: number;
    private country: string;
    getNotified: (Child | God | Chancellor)[] = [];

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    notify(msg: string): void {
        console.log(`${this.name} (${this.country}, ${this.age}): ${msg}`);
    }
}