let saldo_atual = parseFloat(prompt("Digite o saldo atual:")); // Recebe o saldo atual da conta

alert("Seu saldo atual é de: " + "R$ " + saldo_atual); // Exibe o saldo atual da conta

let operation; // Declara a variável operation fora do loop

do {
    operation = parseInt(prompt("Digite a operação desejada: " +
        "\n1 - Depósito" +
        "\n2 - Remover Dinheiro" +
        "\n3 - Sair"
    )); // Recebe a operação desejada

    switch (operation) {
        case 1:
            const add = parseFloat(prompt("Digite o valor do depósito:")); // Recebe o valor do depósito
            saldo_atual += add; // Atualiza o saldo
            alert("Depósito realizado com sucesso! Seu saldo atual é de: " + "R$ " + saldo_atual); // Exibe o saldo atual da conta após o depósito
            break;
        case 2:
            const remove = parseFloat(prompt("Digite o valor a ser removido:")); // Recebe o valor a ser removido
            saldo_atual -= remove; // Atualiza o saldo
            alert("Saque realizado com sucesso. Seu saldo atual é de: " + "R$ " + saldo_atual); // Exibe o saldo atual da conta após o saque
            break;
        case 3:
            alert("Operação finalizada." +
                "\nSeu saldo atual é de: " +
                saldo_atual);
            break;
        default:
            alert("Operação inválida. Tente novamente.");
    }
} while (operation !== 3);