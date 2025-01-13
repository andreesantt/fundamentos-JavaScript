function calcular_area_triangulo(base, altura) {
    return (base * altura) / 2
}

function calcular_area_retangulo(base, altura) {
    return base * altura
}

function calcular_area_quadrado(lado) {
    return lado ** 2
}

function calcular_area_trapezio(basemaior, basemenor, altura) {
    return ((basemaior + basemenor) * altura) / 2
}

function calcular_area_circulo(raio, Pi = 3.14 ) {
    return Pi * raio ** 2
}

function menuPrincipal() {
    let opcao;
    do {
        opcao = prompt(
            "Bem-vindo a Calculadora Geométrica." +
            "\nEscolha uma das opçoes abaixo:\n" +
            "\n1. Calcular área do triângulo" +
            "\n2. Calcular área do retângulo" +
            "\n3. Calcular área do quadrado" +
            "\n4. Calcular área do trapézio" +
            "\n5. Calcular área do círculo" +
            "\n6. Sair"
        );
        switch(opcao) {
            case "1":
                let base = parseFloat(prompt("Digite a base do triângulo:"));
                let altura = parseFloat(prompt("Digite a altura do triângulo:"));
                calcular_area_triangulo(base, altura);
                break
            case "2":
                let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
                let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
                calcular_area_retangulo(baseRetangulo, alturaRetangulo);
                break
            case "3":
                let lado = parseFloat(prompt("Digite o lado do quadrado:"));
                calcular_area_quadrado(lado);
                break
            case "4":
                let baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"));
                let baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"));
                let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio:"));
                calcular_area_trapezio(baseMaior, baseMenor, alturaTrapezio);
                break;
            case "5":
                let raio = parseFloat(prompt("Digite o raio do círculo:"));
                calcular_area_circulo(raio);
            case "6":
                alert('Finalizando...')
                break
            default:
                alert('Opção Inválida!')
        }
    } while (opcao !== '6')
}

menuPrincipal()