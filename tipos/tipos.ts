// string
let nome: string = 'Eliel'
console.log(nome)

// numbers
let idade: number = 27
console.log(idade)

// boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: any
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

// tuplas
let endereco: [string, number] = ["Av Principal", 99]
console.log(endereco)