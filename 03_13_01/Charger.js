class Charger {
    constructor
    //define Parameters
    (
        marca,
        color,
        peso,
        alto,
        ancho,
        longCable,
        tipocable,
        tipocargador,
        fechaFabricacion,
    )
    // Define Properties
    {
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.alto=alto;
        this.ancho = ancho;
        this.cable = {
            long : longCable,
            tipocb : tipocable,
        };
        this.tipocargador = tipocargador;
        this.fechaFabricacion = fechaFabricacion;
    }
    //methods as Functions
    newCable(newLong, newTipo){
        this.cable.long = newLong;
        this.cable.tipocb = newTipo;
    }

    newTipoCh(tipo){
        this.tipocargador = tipo;
    }

    chargerDate(){
        let cDate = new Date();
        let iDate = new Date(this.fechaFabricacion);
        let eDate = cDate - iDate;
        let rDate = Math.floor(eDate / (1000 * 3600 * 24 ));
        return iDate.toDateString() + " days:"+ rDate;
    }
    

}

export default Charger;