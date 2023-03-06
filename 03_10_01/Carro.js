class Carro {
    constructor(
        //define Parameters
        marca,
        color,
        tipo,
        cilindraje,
        puestos,
        motor,
        year,
        capacidad_Pasaj,
        mecanica,
        automatico,
        conductor,
    )
    // Define Properties
    {
        this.marca = marca;
        this.color =color;
        this.tipo = tipo;
        this.cilindraje = cilindraje;
        this.puestos = puestos;
        this.motor = motor;
        this.year=year;
        this.capacidad_Pasaj = capacidad_Pasaj;
        this.trasmision = {
            vMec: mecanica,
            vAuto : automatico,
        }
        this.conductor= conductor;
    }

    // add methods like normal functions

    manejado(tipo_manejo){
        this.conductor = tipo_manejo;
    }
    tipo_trasn(m_Aplica, auto_Aplica){
        this.trasmision.vMec = m_Aplica;
        this.trasmision.vAuto =auto_Aplica;
    }

}

export default Carro;