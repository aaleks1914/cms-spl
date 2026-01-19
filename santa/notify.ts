import {Child} from "./child";
import {God} from "./god";
import {Chancellor} from "./chancellor";

export interface Notify {
    getNotified: (Child | God | Chancellor)[];
    notify(msg: string): void;
}
