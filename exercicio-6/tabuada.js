const number = prompt('Digite um número para ver sua tabuada: ')

let result = " "

for (let i = 1; i <= 20; i++) {
    result += " -> " +`${number}` + " * " + `${i}` + " = " + (number * i) + "\n"
}

alert(`O resultado da tabuada de ${number} é:\n\n${result}`)