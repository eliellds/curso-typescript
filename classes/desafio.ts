// Exercício 1 - Classe
class Moto {

    constructor(public nome: String, 
                public velocidade: number = 0) {

    }

    public buzinar(): void {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number): void {
        if(delta > 0) {
            this.velocidade += delta
        }
    }
}
 
const moto: Moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
abstract class Objeto2D {

    public base: number = 0
    public altura: number = 0

    abstract area(): number
}

class Retangulo extends Objeto2D {

    public area(): number {
        return this.base * this.altura
    }
}
 
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
const retangulo: Retangulo = new Retangulo()
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
class Estagiario {

    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
        
    }
}
 
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })

const estagiario: Estagiario = new Estagiario()

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)