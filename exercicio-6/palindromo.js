let palindromo = prompt("Digite uma palavra para verificar se é palíndromo: ")

let palindromoinvertido = palindromo.split("").reverse("").join("")

if (palindromo === palindromoinvertido) {
    alert("A palavra é um palíndromo")
} else {
    alert(`a palavra ${palindromo} invertida resulta em ${palindromoinvertido}, portanto não é um palíndromo`)
}