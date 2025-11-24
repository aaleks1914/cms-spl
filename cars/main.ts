import {Car} from "./car";
import {Engine} from "./engine";
import {Tank} from "./tank";
import {Seats} from "./seat";

const myEngine: Engine = new Engine(150, 1, 4);
const myTank: Tank = new Tank(70, 40);
const mySeats: Seats = new Seats("Leather", 5);
const myCar: Car = new Car(myEngine, myTank, mySeats, 240, 6, "red", false);

console.log(myCar);

/*console.log(myCar.getRegistrationStatus());
myCar.setRegistrationStatus(true);
console.log(myCar.getRegistrationStatus());*/