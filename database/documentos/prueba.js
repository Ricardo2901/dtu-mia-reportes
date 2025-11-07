class Animal {
    constructor(name, sonido) {
        this.name = name;
        this.sonido = sonido;
    }

    hacerSonido() {
        console.log(`${this.name} hace: ${this.sonido}`);
    }
}

class Perro extends Animal {
    constructor(name, raza) {
        super(name, "Guau");
        this.raza = raza;
    }

    mostrarRaza() {
        console.log(`${this.name} es un perro de raza ${this.raza}`)
    }
}

//uso de las clases
const miPerro = new Perro("Fido", "Golden Retriever");
miPerro.hacerSonido(); // Fido es un perro de raza Golden Ret
miPerro.mostrarRaza();