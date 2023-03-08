let newDate = new Date()

let data = document.getElementById("date_el")

data.innerText += newDate.toDateString()

//=========================================================

import Charger from "./Charger.js"

const charger1 = new Charger(
    "Deker",
    "black",
    4,
    5,
    9,
    15,
    "doble",
    "AC",
    "Febrary 6, 2023 12:00:00"
)

console.log("The new Charger is:",charger1)

console.log("Fabrication Date: ", charger1.fechaFabricacion)
console.log("Fabrication days: ", charger1.chargerDate())




