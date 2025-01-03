// let palindromo = prompt("Digite uma palavra para verificar se é palíndromo: ")

// let palindromoinvertido = palindromo.split("").reverse("").join("")

// if (palindromo === palindromoinvertido) {
//     alert("A palavra é um palíndromo")
// } else {
//     alert(`a palavra ${palindromo} invertida resulta em ${palindromoinvertido}, portanto não é um palíndromo`)
// }

//outra forma de fazer este mesmo exercício

const word = prompt("Digite uma palavra para verificar se é palíndromo: ")
let reverseWord = ""
// macarrão
for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
}

if (word === reverseWord) {
    alert(`A palavra ${word} é um palíndromo`)
}   else {
    alert(`a palavra ${word} invertida resulta em ${reverseWord}, portanto não é um palíndromo`)
}