const idade = prompt("Informe a sua idade");

if (idade > 18 ) {
    alert ("Você é maior de idade")
} else if (idade > 12) {
    alert("Você é um adolescente")
} else if (idade > 4) {
    alert("Você é uma criança")
} else {
    alert("Você é um bebê")
}


// maneira simples de fazer o mesmo código acima

// const resultado = (6 === 6) ? "É verdade" : "É mentira";
// console.log(resultado);