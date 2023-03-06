/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire 
 *   object and its specific properties.
 */
 

const toolBox = {
    name : "toolsForWorkHard",
    brand : "Snap-on",
    color : "blue",
    trays : 6,
    coverLength:{
        right : 30,
        left : 30,
    }, 
    traysOpen: function (traysStatusR, traysStatusL) {
        this.coverLength.right = traysStatusR;
        this.coverLength.left = traysStatusL;
    },
};

var firstBrand= "brand"
console.log("The name of the box is :", toolBox.name)
console.log("The trays L&R lenght are : ", toolBox.coverLength.left,"and",toolBox.coverLength.right)
console.log("The Color is:", toolBox["color"])
console.log("The Brand is:",toolBox[firstBrand])

let t = document.getElementById("tools")
t.innerText = toolBox.coverLength.right



// =================================================


const computador = {
    marca: "HP",
    modelo: 2020,
    generacion: 3,
    color: "negro",
    memoria_slots: {
        slot_1: 4,
        slot_2: 8,
        slot_3: 16
    },
    disco_duro: {
        estado_solido : true,
        mecanico : true,
    },
    extractor_speed:{
        speed_1: 100,
        speed_2:200,
        speed_3:400,
    },
    disco_instalado: function(solido,mecanico) {
        this.disco_duro.estado_solido = solido;
        this.disco_duro.mecanico = mecanico;
    },
}

console.log("The Pc is : ",computador.color)
console.log("The Pc is : ",computador.disco_duro.estado_solido)
console.log("The Pc is : ",computador.disco_duro.mecanico)

console.log(computador.disco_instalado(false,true))

console.log("The Pc is : ",computador.disco_duro.estado_solido)
console.log("The Pc is : ",computador.disco_duro.mecanico)

let d = document.getElementById("gut")

d.textContent = computador.disco_duro.estado_solido + " "
d.textContent += computador.disco_duro.mecanico + " "
