import {Notify} from "./notify";
import {Child} from "./child";
import {God} from "./god";
import {Chancellor} from "./chancellor";

export class Santa implements Notify {
    getNotified: (Child | God | Chancellor)[] = [];

    addNotifiable(notifiable: Child | God | Chancellor): void {
        this.getNotified.push(notifiable);
    }

    notify(msg: string): void {
        this.getNotified.forEach(n => n.notify(msg));
    }
}