// let a = 1
// console.log(a)

// let b = ++a

// console.log(b)
// console.log(a)

// let c = a++
// console.log(c)
// console.log(a)

// DECLARACION DE CLASES EN JAVASCRIPT ANTES

function Carro(ruedas,color){
    this.ruedas = ruedas;
    this.color = color

}

Carro.prototype.arrancar = function(){
    console.log(`Estas arrancando un carro de ${this.ruedas} ruedas y de color ${this.color}`);
}


const Vehiculo = new Carro(4,"azul");

Vehiculo.arrancar()

let vehiculo2 = new Carro(4,"negro")
vehiculo2.arrancar()

// DECLARACION DE CLASES CON LAS NUEVAS REGLAS DE JAVASCRIPT

class Bicicleta{

    constructor(ruedas,color){
        this.ruedas = ruedas;
        this.color = color;

    }

    arrancar(){
        console.log(`Estas arrancando una biciclete de: 
        ${this.ruedas} ruedas y de color ${this.color}`)
    }


}

let bici = new Bicicleta(2,"verde");
bici.arrancar()

