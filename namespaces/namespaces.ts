namespace Areas {

    const PI = 3.14

    export function areaCircunferencia(raio: number): number {
        return PI * Math.pow(raio, 2)
    }

    export function areaRetangulo(base: number, altura: number): number {
        return base * altura
    }
}

const PI = 2.99

console.log(Areas.areaCircunferencia(10))
console.log(Areas.areaRetangulo(10, 20))

console.log(PI)