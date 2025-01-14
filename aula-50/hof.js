// High Order Function -> Função que recebe outra dunção como parâmetros 

function calcular(a, b, operacao) {
    console.log('Realizando uma opreção')
    const resultado = operacao(a, b) // somar(3, 5)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3, 5, somar))


console.log(calcular(8, 4, function subtrair(x, y) {
    console.log('Realizando uma subtração')
    return x - y
}))