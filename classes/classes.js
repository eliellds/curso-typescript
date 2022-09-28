"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3);
aniversario.dia = 9;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3);
aniversarioEsperto.dia = 9;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio Produto
// Atrubutos: nome, preco e desconto
// Criar o construtor
// Obs. 1: Desconto é opcional (valor padrão 0)
// Obs. 2: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
    resumo() {
        let precoFinal = this.precoComDesconto().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return `${this.nome} custa ${precoFinal} ${this.desconto != 0 ? `(${this.desconto * 100}% off)` : ""}`;
    }
}
const produto1 = new Produto("Café", 10.99);
const produto2 = new Produto("Pão de Queijo", 4.99, 0.1);
console.log(produto1);
produto1.desconto = 0.15;
console.log(produto2);
console.log(produto1.resumo());
console.log(produto2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // protected permite transmitir o método por herança
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ferrari", "F40", 350);
Array(60).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(20).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
// simular "erros"
// carro1.velocidadeAtual = 400
// console.log("Atual -> " + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log("Máxima -> " + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(50)
// console.log("Atual -> " + carro1.velocidadeAtual)
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
        // ...
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10; // implicitamente chamou o set
console.log(pessoa1.idade); // implicitamente chamou o get
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
class Unico {
    constructor() {
    }
    static getInstance() {
        if (Unico.instance == null) {
            Unico.instance = new Unico();
        }
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = null;
// const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = "DC-8"
// turboHelice.prefixo = "PT-DEF"
console.log(turboHelice);
//# sourceMappingURL=classes.js.map