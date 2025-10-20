import {Car} from "./car";

const car: Car = new Car(150, 240, 6, "red", false);

console.log(car.getRegistrationStatus());

car.setRegistrationStatus(true);
console.log(car.getRegistrationStatus());