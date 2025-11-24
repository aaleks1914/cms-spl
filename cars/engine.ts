export class Engine {
    private horsepower: number;
    private fuelType: number;
    private cylinders: number;

    constructor(horsepower: number, fuelType: number, cylinders: number) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
        this.cylinders = cylinders;
    }
}