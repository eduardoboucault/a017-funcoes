const adicao = (n1,n2) => {
    return n1+n2
}

const subtracao = (n1,n2) => {
    return n1-n2
}

const multiplicacao = (n1,n2) => {
    return n1*n2
}

const divisao = (n1,n2) => {
    return n1/n2
}

const num1 = Number(prompt('Digite um número:'))

const num2 = Number(prompt('Digite outro número:'))

console.log(`A soma de: ${num1} + ${num2} = ${adicao(num1,num2)}`)

console.log(`A subtração de: ${num1} - ${num2} = ${subtracao(num1,num2)}`)

console.log(`A multiplicação de: ${num1} x ${num2} = ${multiplicacao(num1,num2)}`)

console.log(`A divisão entre: ${num1} / ${num2} = ${divisao(num1,num2)}`)

// const arrayAritimetica = [ 

// (n1,n2) => n1 + n2,

// (n1,n2) => n1 - n2,  

// (n1,n2) => n1 * n2, 
    
// (n1,n2) => n1 / n2

// ]

// const adicao = arrayAritimetica[0]
// const subtracao = arrayAritimetica[1]
// const multiplicacao = arrayAritimetica[2]
// const divisao = arrayAritimetica[3]

// console.log(adicao(10,10))
// console.log(subtracao(20,10))
// console.log(multiplicacao(5,5))
// console.log(divisao(30,6))