const turist_name = prompt("Digite seu nome: ")
// Recebe o nome do turista

const visit_city = prompt("Você já visitou alguma cidade? (sim/não)") // Recebe a cidade visitada

while (visit_city) {
    if (visit_city === "sim") {
        const visited_city = prompt("Qual cidade você visitou?") // Recebe o nome da cidade visitada
        const other_visited = prompt("Você visitou outra cidade? (sim/não)") // Pergunta se visitou outra cidade
        alert("Certo " + turist_name + " você visitou a cidade de " + visited_city)
    } else if (visit_city === "não") {
        alert("Certo " + turist_name + " você não visitou nenhuma cidade")
        break
    }
}