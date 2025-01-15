let opcao = ""
let vaga_de_emprego = []

function listar_vagas() {
    
}

function criar_nova_vaga() {

}

function visualizar_vaga () {

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