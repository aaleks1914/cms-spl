export class Car {
    private horsepower: number;
    private topspeed: number;
    private zero_to_hundred: number;
    private color: string;
    private registered: boolean;

    constructor(horsepower: number, topspeed: number, zero_to_hundred: number, color: string, registered: boolean) {
        this.horsepower = horsepower;
        this.topspeed = topspeed;
        this.zero_to_hundred = 0;
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