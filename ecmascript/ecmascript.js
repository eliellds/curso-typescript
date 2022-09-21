"use strict";
// let & const
let seraQuePode = "?";
console.log(seraQuePode);
// var seraQuePode = "?" // hoisting
let estaFrio = true;
if (estaFrio) {
    // var acao = "Colocar o casaco!" // global caso fora de função
    let acao = "Colocar o casaco!"; // escopo apenas dentro do bloco
    console.log(acao);
}
const cpf = "12345678900";
// cpf = "44144144141" // não é permitido atribuir valor à uma constante
console.log(cpf);
var segredo = "externo!";
function revelar() {
    const segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = "def";
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i) 
/*
    caso dentro do for fosse var,
    o valor de i seria acessível fora do loop
*/
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log("Olá, " + pessoa);
falarCom("João");
// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind({
//     nome: "Ana"
// }) // bind = o que for passado como parâmetro será executado dentro da funão como this
// normalComThisEspecial()
// // this??
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: "Ana" })
// arrowComThisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers)); // Spread
const turmaA = ["João", "Maria", "Fernanda"];
const turmaB = ["Fernando", "Miguel", ...turmaA, "Lorena"];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 11, 25);
console.log(numeros);
console.log(retornaArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: "SSD 480GB",
    preco: 200,
    caracteristicas: {
        w: "Importado"
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
const usuarioID = "SuporteCod3r";
const notificacoes = "9";
// const boasVindas = "Boas vindas " + usuarioID +
//     " Notificações: " + notificacoes
const boasVindas = `
Boas vindas ${usuarioID}, 
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// Desafio
// Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Verifique se há espaço para melhorias nesse trecho de código!
const dizerOla = function (nome = "Pessoa") {
    console.log("Olá, " + nome);
};
dizerOla();
dizerOla("Anna");
// function dizerOla(this: any): void {
//     console.log(`Olá, ${this === undefined ? "Pessoa" : this.nome}`)
// }
// dizerOla()
// const olaNome: () => void =
// dizerOla.bind({
//     nome: "Anna"
// })
// olaNome()
// Dado esse array, imprima o menor valor!
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Adicione os elementos de nums em array !
let array = [55, 20];
array.push(...nums);
console.log(array);
// Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome: nm, experiencia: xp } = cientista;
console.log(nm, xp);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch! ' + err));
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(pokemon => console.log(pokemon.forms[0].name))
    .catch(err => console.log('Catch! ' + err));
//# sourceMappingURL=ecmascript.js.map