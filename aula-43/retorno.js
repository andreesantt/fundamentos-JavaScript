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

const notebook = criarProduto("Notebook Intel Core i3 8gb", 2500)

console.log(notebook)