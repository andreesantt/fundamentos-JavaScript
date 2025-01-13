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

function menuPrincipal(menu) {
    let opcao;
    do {
        alert(
            "Bem-vindo a Calculadora Geométrica." +
            "\nEscolha uma das opçoes abaixo:\n" +
            "\n1. Calcular área do triângulo" +
            "\n2. Calcular área do retângulo" +
            "\n3. Calcular área do trapézio" +
            "\n4. Calcular área do circulo"
        )
    } while (opcao !== '6')
}

menuPrincipal()