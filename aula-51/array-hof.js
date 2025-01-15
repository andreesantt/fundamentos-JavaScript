const personagens = [
    { nível: 42, nome: "Thrall", raca: "Orc", classe: "Xama" },
    { nível: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nível: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nível: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nível: 26, nome: "Jaina", raca: "Humano", classe: "Mega" },
    { nível: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotista" },
    { nível: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" }
]

// Map -> Mapeamento de array existente para um novo array criado

const nomes=  []

for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome)
}

console.log(nomes)

