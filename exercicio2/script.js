//? Exercício 2

//* a)

// const soma = (n1,n2) => {
//     console.log(n1+n2)
// }

// soma(10,20)

//* b)

const numeroMaior = (n1,n2) => {
    if(n1 >= n2){
        return `Primeiro número é maior ou igual que segundo: ${true}`
    }else{
        return `Primeiro número é maior ou igual que segundo: ${false}`
    }
}

console.log(numeroMaior(50,1))

// //* c)

// const numeroPar = (n) => {
//     if(n % 2 === 0){
//         console.log('O número é par!')
//     }else{
//         console.log('O número é ímpar!')
//     }
// }

// numeroPar(10)

// //* d)

// const perguntaCarro = prompt("Qual seu carro favorito?")

// const string = (frase) => {
//     console.log(`Você escolheu: ${frase.toUpperCase()} e ${frase} tem ${frase.length} caracteres`)
// }
// string(perguntaCarro)