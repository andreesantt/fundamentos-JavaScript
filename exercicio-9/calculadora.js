function calcular_area_triangulo(base, altura) {
    let areatriagulo =  (base * altura) / 2
    alert('Área do triângulo: ' + areatriagulo)
}

function calcular_area_retangulo(base, altura) {
     let arearetangulo = base * altura
     alert('Área do retângulo: ' + arearetangulo)
}

function calcular_area_quadrado(lado) {
    let areaquadrado = lado ** 2
    alert('Área do quadrado: ' + areaquadrado)
}

function calcular_area_trapezio(basemaior, basemenor, altura) {
    let areatrapezio = ((basemaior + basemenor) * altura) / 2
    alert('Área do trapézio: ' + areatrapezio)
}

function calcular_area_circulo(raio, Pi = 3.14 ) {
    let areacirculo =  Pi * raio ** 2
    alert('Área do círculo: ' + areacirculo)
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
                break
            case "6":
                alert('Finalizando...')
                break
            default:
                alert('Opção Inválida!')
        }
    } while (opcao !== '6')
}

menuPrincipal()