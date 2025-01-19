const x = parseFloat(prompt('Digite um número: '))
const y = parseFloat(prompt('Digite outro número'))

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y


alert(
    'Bem-vindo a calculadora de 4 operações: ' +
    `\nOs número digitados foram ${x} e ${y}` +
    '\nA soma vale ' + soma +
    '\nA subtração vale ' + subtracao +
    '\nA multiplicação vale ' + multiplicacao +
    '\nA divisão vale ' + divisao
)