const imoveis = []
let opcao = ""

do {
    opcao = prompt( "Bem-vindo ao Cadastro de Imóveis.\nTotal Imóveis: " + imoveis.length + "\nEscolha uma opção: " +
        "1. Cadastrar Imóveis" +
        "\n2. Listar Imoveis" +
        "\n3. Sair"
    )
    switch (opcao) {
        case '1':

            break 
        case "1":
            const imovel = {}

            imovel.propietario = prompt("Informe o nome do propieário do imóvel: ")
            imovel.quartos = prompt('Quantos quartos possui o imóvel: ')
            imovel.banheiros = prompt('Quantos banheiros possui o imóvel: ')
            imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)')
            break

        case "1":
            alert('Encerrando...')
            break
        default:
            alert("Opção inválida!")
    } 
} while (opcao !== "3");