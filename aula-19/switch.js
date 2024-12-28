const result = prompt('Escolha uma alternativa: \na) \nb) \nc) ')

const numeric_result = parseFloat(result)

switch(numeric_result) {
    case 1:
        alert('Você escolheu a alternativa a')
        break
    case 2:
        alert('Você escolheu a alternativa b')
        break
    case 3:
        alert('Você escolheu a alternativa c')
        break
    default:
        alert('Finalizando...')
}