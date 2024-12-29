const turist_name = prompt("Digite seu nome: ")
// Recebe o nome do turista
let cities = " "
let count = 0
// Inicializa a variável cities como uma string vazia e a variável count como 0

let continue_ = prompt("Você já visitou alguma cidade? (sim/não)")

while (continue_ === "sim") {
    let city = prompt("Qual cidade você visitou? ")
    // citiies = cities + ...
    cities += " - " + city +  + "\n"
    count++
    continue_ = prompt("Você já visitou outra cidade? (sim/não)")
}

alert("Turista: " + turist_name +
    "\nQuantidades de cidades visitadas: " + count +
    "\nCidades visitadas:\n" + cities 
)