import Carro from "./Carro.js";

const car1 = new Carro(
    "susuki",
    "negro",
    "sedan",
    1200,
    5,
    "combustion",
    2022,
    5,
    true,
    false,
    true
);

console.log("The car has a motor, ", car1.motor)
console.log("The car is a object, ", car1)