class Rueda{
    constructor
    //Define Parameters
    (
        forma,
        color,
        precio,
        diametroOut,
        diametroIn,
        marca,
        rodamientoFijo,
        rodamientomovil,
        capacidad,
    )
    //Define Properties
    {
        this.forma = forma;
        this.color = color;
        this.precio = precio;
        this.diametro ={
            out : diametroOut,
            in : diametroIn,
        };
        this.marca = marca;
        this.acopla = {
            fijo : rodamientoFijo,
            movil : rodamientomovil,
        };
        this.capacidad =capacidad;

    }
    // methods as functions
    newDiameter(diameOut, diameIn){
        this.diametro.out = diameOut;
        this.diametro.in = diameIn;
    };
    newAcompla(acopF, acopM){
        this.acopla.fijo = acopF;
        this.acopla.movil = acopM;
    }
}

export default Rueda;