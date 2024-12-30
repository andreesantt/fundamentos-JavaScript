let choose;

while (choose !== 5) {
    choose = parseInt(prompt("Escolha uma opçao: " +
        "\n1 - Opção 1" +
        "\n2 - Opção 2" +
        "\n3 - Opção 3" +
        "\n4 - Opção 4" +
        "\n5 - Encerrar"
    ))
    switch (choose) {
        case 1:
            alert("Opção 1")
            break
        case 2:
            alert("Opção 2")
            break
        case 3:
            alert("Opção 3")
            break
        case 4:
            alert("Opção 4")
            break
        case 5:
            alert("Encerrando")
            break
        default:
            alert("Opção inválida")
    }
}
