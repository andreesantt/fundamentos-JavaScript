let opcao = ""
let vaga_de_emprego = [
    {
        nome: "Desenvolvedor Frontend",
        descricao: "Vaga para desenvolvedor frontend com experiência em React.",
        data_limite: "30-01-2025",
        candidatos: ["João", " Maria"],
    },
    {
        nome: "Analista de Sistemas",
        descricao: "Vaga para analista de sistemas com experiência em Python.",
        data_limite: "15-02-2025",
        candidatos: ["Pedro"],
    },
    {
        nome: "Designer Gráfico",
        descricao: "Vaga para designer gráfico com conhecimento em Adobe Illustrator.",
        data_limite: "20-01-2025",
        candidatos: ["Ana", " Lucas", " Fernanda"],
    }
]

function listar_vagas() {
    for (let i = 0; i < vaga_de_emprego.length; i++) {
        let lista = vaga_de_emprego[i];
        alert('Vaga: ' + i + '\nNome: ' + lista.nome + '\nCandidatos Inscritos: ' + lista.candidatos + '\nInscrições encerram: ' + lista.data_limite)
    }
}

function criar_nova_vaga() {
    let input = prompt('Digite abaixo as seguintes informações: ' +
        '\nNome da vaga: ' +
        '\nDescrição da vaga: ' +
        '\nData limite para as incrições: '
    );

    let confirmacao = confirm('Você confirma as informações? Deseja salvar?\n' + input)

    if (confirmacao !== confirm) {
        
    }


    let  [nome, descricao, data_limite] = input.split(',');


    let novaVaga = {
        nome: nome,
        descricao: descricao,
        data_limite: data_limite,
        candidatos: []
    }


    vaga_de_emprego.push(novaVaga)
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