// Crie um programa que receba o nome de dois personagens e seus respectivos poderes de ataque.
 alert("Vamos batalhar?"); // Alerta que a batalha vai começar
// Informações do primeiro personagem:
const attacker = prompt("Digite o nome do primeiro personagem: "); // Recebe o nome do primeiro personagem
const damage_1 = parseFloat(prompt("Digite o dano do primeiro personagem: ")); // Recebe o dano do primeiro personagem

// Informações do segundo personagem:
const defender = prompt("Digite o nome do segundo personagem: "); // Recebe o nome do segundo personagem
let hp_defender= parseFloat(prompt("Digite o HP do segundo personagem: ")); // Recebe o nível de vida do segundo personagem
const defenser_power = parseFloat(prompt("Digite o poder de defesa do segundo personagem: ")); // Recebe o poder de defesa do segundo personagem
const shield_defender = prompt("O segundo personagem possui escudo? (Sim/Não) "); // Recebe se o segundo personagem possui escudo
 let hp_final = 0;

alert("Chegou a hora de batalhar!!!"); // Alerta que a batalha vai começar

// Calcula o dano

if (damage_1 > defenser_power && shield_defender === "Não") {
    const damage1 = damage_1 - defenser_power;
} else if (damage_1 > defenser_power && shield_defender === "Sim") {
    const damage2 = (damage_1 - defender_power) / 2;
}

// Aplicação de dano

hp_defender -= hp_final

// Exibição do resultado

alert("O dano causado pelo personagem " + attacker + " foi de " + damage1 + " pontos de vida. O personagem " + defender + " agora possui " + hp_defender_final + " pontos de vida.");

