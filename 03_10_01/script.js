import Carro from "./Carro.js";
import Shoe from "./shoe.js";
import Rueda from "./Rueda.js";

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
/**
console.log("The car has a motor, ", car1.motor)
console.log("The car is a object, ", car1)

let caracterist = document.getElementById("caract")

//caracterist.innerText = car1.tipo_trasn("no Aplica", "sin Trans")
caracterist.innerText = car1.trasmision.vAuto

console.log(caracterist)
 */

//=========================================
/**
const shoe_1 = new Shoe(
    100,"black",120000,"sport","adidas",23,23,null,null,"cocodrilo","importado"
);

console.log("The Data referent to the shoe is: ", shoe_1.color, shoe_1.marca
,shoe_1.long_cordon.izq,)

//console.log(shoe_1.material.mat_1,shoe_1.material.mat_2,shoe_1.material.mat_3,)

console.log(shoe_1.newConfection("lagarto"))
console.log(shoe_1.nacional)

console.log("The material is:", shoe_1.material)

shoe_1.newMaterialConf("algodon")
console.log("The material is:", shoe_1.material)
 */


//==================================

const rueda__1 = new Rueda(
    "redonda","green",1200,23,12,"Michelin",null,null,340
);

console.log(rueda__1.newDiameter(23,23))
console.log(rueda__1.diametro.in,rueda__1.diametro.out)

console.log(rueda__1)


