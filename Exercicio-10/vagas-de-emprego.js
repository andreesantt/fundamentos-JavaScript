let opcao = ""
let vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + " candidatos)"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga')

    const confirmacao = confirm(
        "Daseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + 
        "\nDescrição: " + descricao +
        "\nData Limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert('Vaga criada com sucesso!')
    }
}

function visualizar_vaga () {
    const indice = prompt('Informe o índece da vaga que deseja exibir: ')
    const vaga = vaga[indice]

    
}

function inscrever_candidato() {

}

function excluir_vaga() {

}

do {
    opcao = prompt('Bem-vindo ao menu de Vagas!\n' +
        '\n1. Listar vagas disponíveis' +
        '\n2. Criar uma nova vaga' +
        '\n3. Visualizar uma vaga' +
        '\n4. Inscrever um candidato em uma vaga' +
        '\n5. Excluir uma vaga' +
        '\n6. Sair'
    )
    switch(opcao) {
        case "1":
            listar_vagas()
            break
        case "2":
            criar_nova_vaga()
            break
        case "3":
            visualizar_vaga()
            break
        case "4":
            inscrever_candidato()
            break
        case "5":
            excluir_vaga()
            break
        case "6":
            alert('Finalizando...')
            break
        default:
            alert('Opção inválida!')
    }
} while (opcao !== "6")