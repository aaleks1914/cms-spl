import {God} from "./god";
import {Chancellor} from "./chancellor";

export class Child {
    private name: string;
    private age: number;
    private behavior: string;

    getNotified: (Child | God | Chancellor)[] = [];

    constructor(name: string, age: number, behavior: string) {
        this.name = name;
        this.age = age;
        this.behavior = behavior;
    }

    notify(msg: string): void {
        console.log(`${this.name} (${this.age}, ${this.behavior}): ${msg}`);
    }
}