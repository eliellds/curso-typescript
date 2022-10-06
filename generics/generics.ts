function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27}))

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27}))

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics
abstract class OperacaoBinaria<T, R> {

    constructor(public operando1: T,
                public operando2: T) {

    }

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
    
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 434).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 5, 2022)
console.log(new DiferencaEntreDatas(d1, d2).executar())

// Desafio classe Fila
// Atributo: fila (Array)
// Métodos: entrar, próximo, imprimir

// Constraints - restrições
class Fila<T extends number | string> {
    private fila: Array<T>

    constructor (...args: T[]) {
        this.fila = args
    }

    entrar(item: T) {
        this.fila.push(item)
    }

    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null
        }
        
    }

    imprimir() {
        console.log(this.fila)
    }
}

const aluno1: string = "Eliel"
const aluno2: string = "Mari"
const aluno3: string = "Jessica"
const aluno4: string = "Alex"

const fila: Fila<string> = new Fila()
fila.entrar(aluno1)
fila.entrar(aluno2)
fila.entrar(aluno3)
fila.imprimir()
console.log(fila.proximo())
fila.imprimir()
fila.entrar(aluno4)
fila.imprimir()

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// const outraFila = new Fila<boolean>(true, false)

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

// Tipo objeto genérico
type Par<K, V> = { chave: K, valor: V }

class Mapa<K, V> {

    private itens: Array<Par<K,V>> = new Array<Par<K, V>>()

    obter(chave: K): Par<K,V> | null {
        const item: Par<K, V>[] = this.itens
            .filter(item => item.chave === chave)
        return item ? item[0] : null
    }

    colocar(item: Par<K,V>): void {
        const existe: Par<K, V> | null = this.obter(item.chave)
        if (existe) {
            existe.valor = item.valor
        } else {
            this.itens.push(item)
        }
    }

    limpar(): void {
        this.itens = new Array<Par<K, V>>()
    }

    imprimir(): void {
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()