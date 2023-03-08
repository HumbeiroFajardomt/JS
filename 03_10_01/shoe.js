class Shoe {
  //define parameters
  constructor(
    peso,
    color,
    precio,
    estilo,
    marca,
    cordoneIz,
    cordoneDr,
    material,
    nacional
  ) // Define Properties
  {
    this.peso = peso;
    this.color = color;
    this.precio = precio;
    this.estilo = estilo;
    this.marca = marca;
    this.long_cordon = {
      izq: cordoneIz,
      der: cordoneDr,
    };
    this.mat_shoe = {
        mat: material,
    },
    
    this.nacional = nacional
  }

  //methods 
  newLong_cordon(cl, cr){
    this.long_cordon.izq = cl;
    this.long_cordon.der = cr;
  }

  newConfection(place_material){
    this.nacional = place_material;
  }

  newMaterialConf(mater){
    this.material = mater;
  }


}

export default Shoe;