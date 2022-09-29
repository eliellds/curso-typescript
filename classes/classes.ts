class Data {
    // Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes:number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3)
aniversario.dia = 9
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)


class DataEsperta {

    constructor(public dia: number = 1, 
                public mes:number = 1, 
                public ano: number = 1970) {

    }
}

const aniversarioEsperto = new DataEsperta(3)
aniversarioEsperto.dia = 9
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)


// Desafio Produto
// Atrubutos: nome, preco e desconto
// Criar o construtor
// Obs. 1: Desconto é opcional (valor padrão 0)
// Obs. 2: Criar dois produtos: passando dois e três params

class Produto {

    constructor(public nome: string, 
                public preco: number, 
                public desconto: number = 0) {
                    
    }

    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto

    public precoComDesconto(): number {
        return this.preco - (this.preco * this.desconto)
    }

    public resumo(): string {
        let precoFinal: string = this.precoComDesconto().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return `${this.nome} custa ${precoFinal} ${this.desconto != 0 ? `(${this.desconto * 100}% off)` : ""}`
    }
}

const produto1: Produto = new Produto("Café", 10.99)
const produto2: Produto = new Produto("Pão de Queijo", 4.99, 0.1)

console.log(produto1)
produto1.desconto = 0.15
console.log(produto2)
console.log(produto1.resumo())
console.log(produto2.resumo())

class Carro {

    private velocidadeAtual: number = 0

    constructor(public marca: string, 
                public modelo: string,
                private velocidadeMaxima: number = 200) {

    }

    // protected permite transmitir o método por herança
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade: number = this.velocidadeAtual + delta
        const velocidadeValida: boolean = novaVelocidade >= 0
        && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1: Carro = new Carro("Ferrari", "F40", 350)

Array(60).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

// simular "erros"
// carro1.velocidadeAtual = 400
// console.log("Atual -> " + carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log("Máxima -> " + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(50)
// console.log("Atual -> " + carro1.velocidadeAtual)

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super("Ferrari", modelo, velocidadeMaxima)
        // ...
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40: Ferrari = new Ferrari("F40", 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())

// Getters & Setters
class Pessoa {

    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1: Pessoa = new Pessoa()
pessoa1.idade = 10 // implicitamente chamou o set
console.log(pessoa1.idade) // implicitamente chamou o get

pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {

    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))

// Classe abstrata
abstract class Calculo {

    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado() : number {
        return this.resultado
    }
}

class Soma extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

class Unico {

    private static instance: Unico | null = null

    private constructor() {

    }

    static getInstance(): Unico {
        if (Unico.instance == null) {
            Unico.instance = new Unico()
        }
        return Unico.instance
    }

    agora() {
        return new Date()
    }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora())

// Somente Leitura
class Aviao {

    public readonly modelo: string
    
    constructor(modelo: string, 
                public readonly prefixo: string) {
                    this.modelo = modelo
    }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC")
// turboHelice.modelo = "DC-8"
// turboHelice.prefixo = "PT-DEF"
console.log(turboHelice)