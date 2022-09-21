let canal: string = "Gaveta"
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome = "Pedro"
// nome = "Pedro"
// console.log(`Nome = ${nome}`);

// (function() {
//     let nome: string = "Ana"
// })()

function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = "abc"

function saudar(isManha: boolean): string {
    let saudacao: string
    if(isManha) {
        saudacao = "Bom Dia!"
    } else {
        saudacao = "Olá!"
    }
    return saudacao
}