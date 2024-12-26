const first_car = prompt("Digite o nome do primeiro carro: "); // Carro A
const first_speed = parseFloat(prompt("Digite a velocidade do primeiro carro: ")); // velocidade do carro A em km/h

const second_car = prompt("Digite o nome do segundo carro: "); // Carro B
const second_speed = parseFloat(prompt("Digite a velocidade do segundo carro: ")); // velocidade do carro B em km/h

if (first_speed > second_speed ) {
    alert("O carro " + first_car + " é mais rápido que o carro " + second_car + ".");
} else if (second_speed > first_speed) {
    alert("O carro " + second_car + " é mais rápido que o carro " + first_car + ".");
} else if (first_speed === second_speed) {
    alert("Os carros " + first_car + " e " + second_car + " têm a mesma velocidade.");
}