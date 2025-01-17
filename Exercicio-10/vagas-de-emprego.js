let opcao = ""
let vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga')

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
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
    if (indice >= vagas.length || indice < 0) {
        alert("índice inválido")
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")
    alert(
        "Vaga n° " + indice +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato: ")
    const indice = prompt('Informe o indice da vaga para qual o mesmo deseja se inscrever: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao +"\nData Limite: " + vaga.dataLimite
    )

    if(confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada com sucesso!')
    }
}

function excluirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja excluir: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" + "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao +"\nData Limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluída.')
    }
}

function exibirMenu() {
    const opcao = prompt('Bem-vindo ao menu de Vagas!\n' +
        '\n1. Listar vagas disponíveis' +
        '\n2. Criar uma nova vaga' +
        '\n3. Visualizar uma vaga' +
        '\n4. Inscrever um candidato em uma vaga' +
        '\n5. Excluir uma vaga' +
        '\n6. Sair'
    )
    return opcao
}

function executar() {

    do {
        opcao = exibirMenu()

        switch(opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                criarVaga()
                break
            case "3":
                visualizar_vaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert('Saindo...')
                break
            default:
                alert('Opção inválida.')
        }
    } while (opcao !== "6")
}

executar()