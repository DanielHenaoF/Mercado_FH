class Aviones {
  tipo = "Comercial";
  marca = "Embraer";
  modelo = "E-195";

  EstadoMantenimiento() {
    console.log(
      "El avión de tipo " +
        this.tipo +
        " tiene un estado de mantenimiento al día."
    );
  }
  AlturaVuelo() {
    console.log("El avión de tipo " + this.tipo + " vuela a altura media.");
  }
}

const datosAviones = new Aviones();
datosAviones.EstadoMantenimiento();
datosAviones.AlturaVuelo();

class Jet extends Aviones {
  constructor(tipo, marca, modelo, capacidad) {
    super(tipo, marca, modelo);
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.capacidad = capacidad;
  }
  CapacidadMax() {
    console.log(
      "El avión de tipo " +
        this.tipo +
        " de marca " +
        this.marca +
        " tiene capacidad para " +
        this.capacidad +
        " pasajeros."
    );
  }
  AlturaVuelo() {
    console.log("El avión de tipo " + this.tipo + " vuela a altura superior.");
  }
}

const jet = new Jet("Privado", "Embraer", "E-170", "1000");
jet.CapacidadMax();
jet.AlturaVuelo();

class Militar extends Aviones {
  constructor(tipo, marca, modelo, armamento) {
    super(tipo, marca, modelo);
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.armamento = armamento;
  }
  Municiones() {
    console.log(
      "El avión de modelo " +
        this.modelo +
        " está equipado con municiones para " +
        this.armamento +
        "."
    );
  }
}

const militar = new Militar("Ataque", "Trunderbolt II", "A-10", "Misiles");
militar.Municiones();

class Presidencial extends Aviones {
  constructor(tipo, marca, modelo, seguridad) {
    super(tipo, marca, modelo);
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.seguridad = seguridad;
  }
  Gps() {
    console.log(
      "El avión presidencial marca " +
        this.modelo +
        " cuenta con monitoreo " +
        this.seguridad +
        " gracias a su GPS."
    );
  }
}

const presidencial = new Presidencial("Politico", "Boeing", "767", "Satelital");
presidencial.Gps();
