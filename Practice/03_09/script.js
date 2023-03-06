/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const silla = {
  tipo : "fija",
  color : "verde",
  marca : "ville",
  posiciones: {
    bajo: 12,
    medio: 24,
    alto:36
  },
  posapies:{
    bajo: 30,
    medio: 15,
  },
  ruedas : false,
  cambio_ruedas : function (tipoSilla, cantidad_rueda){
    this.tipo = tipoSilla
    this.ruedas = cantidad_rueda
  }
}

let model = document.getElementById("modelo")

model.textContent += silla.tipo + " "
silla.cambio_ruedas("movil",true)
model.textContent += silla.tipo + " "
model.textContent += silla.ruedas

console.log(silla)

let objeto = document.getElementById("object")
 objeto.innerText =  silla["ruedas"]

 var tip = "ruedas"
 objeto.textContent +=  silla["ruedas"] + " "
 objeto.textContent +=  silla[tip]









