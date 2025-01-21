// const numberOne = 5
// const numberTwo = 10

// if (numberOne % 2 === 0) {
//     console.log('O número ' + numberOne + ' é divisível por 2 portanto é um número par')
// } else {
//     console.log('Não é um número par')
// }

// if (numberTwo % 2 === 0) {
//     console.log('O número ' + numberTwo + ' é divisível por 2 portanto é um número par')
// } else {
//     console.log('Não é um número par')
// }

function verificarParidade(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é divsível por 2, portanto é um número par`)
    } else {
        console.log(`O número ${numero} não é par`)
    }
}

const numberOne = 5
const numberTwo = 10

verificarParidade(numberOne)
verificarParidade(numberTwo)