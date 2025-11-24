import {Engine} from "./engine";
import {Tank} from "./tank";
import {Seats} from "./seat";

export class Car {
    private engine: Engine;
    private tank: Tank;
    private seats: Seats;

    private topspeed: number;
    private zero_to_hundred: number;
    private color: string;
    private registered: boolean;

    constructor(engine: Engine, tank: Tank, seats: Seats, topspeed: number, zero_to_hundred: number, color: string, registered: boolean) {
        this.engine = engine;
        this.tank = tank;
        this.seats = seats;
        this.topspeed = topspeed;
        this.zero_to_hundred = zero_to_hundred;
        this.color = color;
        this.registered = registered;
    }

    public getRegistrationStatus(): boolean {
        return this.registered;
    }

    public setRegistrationStatus(registered: boolean) {
        if(this.registered == registered) {
            return;
        } else {
            this.registered = registered;
        }
    }
}