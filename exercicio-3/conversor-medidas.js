// Programa conversor de medidas

const meter_value = parseFloat(prompt("Digite o valor em metros:")); // Recebe o valor em metros

let convert_value = prompt("Digite a unidade de medida a ser convertida: \n1 - Milímetros (mm) \n2 - Centrímetros (cm) \n3 - Decímetros (dm) \n4 - Decâmetros (dam) \n5 - Hectômetros (hm) \n6 - Quilômetros (km)") // Recebe a unidade de medida a ser convertida

const numeric_value = parseFloat(convert_value) // Converte o valor recebido para número


switch(numeric_value) {
    case 1:
        alert("O valor em milímetros é: " + meter_value * 1000 + " mm")
        break
    case 2:
        alert("O valor em centímetros é: " + meter_value * 100 + " cm")
        break
    case 3:
        alert("O valor em decímetros é: " + mater_value * 10 + " dm")
        break
    case 4:
        alert("O valor em decâmetros é: " + meter_value / 10 + " dam")
        break
    case 5:
        alert("O valor em hectômetros é: " + meter_value / 100 + " hm")
        break
    case 6:
        alert("O valor em quilômetros é: " + meter_value / 1000 + " km")
        break
    default:
        alert("Valor inválido")
}
