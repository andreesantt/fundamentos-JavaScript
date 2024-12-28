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
 let damage_caused = 0;

alert("Chegou a hora de batalhar!!!"); // Alerta que a batalha vai começar

// Calcula o dano

if (damage_1 > defenser_power && shield_defender === "Não") {
    damage_caused = damage_1 - defenser_power
  } else if (damage_1 > defenser_power && shield_defender === "Sim") {
    damage_1 = (damage_1 - defenser_power) / 2
  }

// Aplicação de dano

hp_defender -= damage_caused

// Exibição do resultado

alert(attacker + " causou " + damage_caused + " pontos de dano em " + defender)
alert(
  attacker + "\nPoder de ataque: " + hp_defender + "\n\n" +
  defender + "\nPontos de vida: " + hp_defender +
  "\nPoder de defesa: " + defenser_power + "\nPossui escudo: " + shield_defender
)
