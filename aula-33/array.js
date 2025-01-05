const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// // push: Adiciona um elemento no final do array e devolve o novo tamanho do array
// push
let tamanho = arr.push("Beromir")
console.log(arr)
console.log(tamanho)


// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// pop: Remove um elemento no final do array e devolve o elemento removido
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)

//Pesquisar por um elementos
//includes
const inclui = arr.includes("Galdalf")
console.log(inclui)

//indexOf
const indice = arr.indexOf("Galdalf")
console.log(indice)

// Cortar e Concatenar
// slice
const hobbit = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbit)
console.log(outros)

