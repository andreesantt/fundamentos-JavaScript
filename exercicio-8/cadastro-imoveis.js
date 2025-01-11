const imoveis = []
let opcao = ""

do {
    opcao = prompt( "Bem-vindo ao Cadastro de Imóveis.\nTotal Imóveis: " + imoveis.length + "\nEscolha uma opção: " +
        "\n1. Cadastrar Imóveis" +
        "\n2. Listar Imoveis" +
        "\n3. Sair"
    )
    switch (opcao) {
        case '1':
            const imovel = {}

            imovel.propietario = prompt("Informe o nome do propieário do imóvel: ")
            imovel.quartos = prompt('Quantos quartos possui o imóvel: ')
            imovel.banheiros = prompt('Quantos banheiros possui o imóvel: ')
            imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)')

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nPropietário: " + imovel.propietario +
                "\nQuartos: " + imovel.banheiros +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            )
            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else (
                alert('Voltando ao menu')
            )
            break
        case "2":
            for (let i = 0; i < imoveis.length; i ++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nPropietário: " + imoveis[i].propietario +
                    '\nQuartos: ' + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].garagem +
                    '\nPossui garagem? ' + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert('Encerrando...')
            break
        default:
            alert("Opção inválida!")
    } 
} while (opcao !== "3");