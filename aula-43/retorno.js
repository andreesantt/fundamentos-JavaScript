function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)


function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }
    return produto
}

console.log(criarProduto("Notebook Intel Core i3 8gb", 2500))

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaRetangular(3, 5))

console.log(areaQuadrada(9))

function ola() {
    let texto = "..."
    return texto
    texto = "Olá, Mundo"
    console.log(texto)
}

console.log(ola()) // função acaba quando o return é atribuido na função

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(13))