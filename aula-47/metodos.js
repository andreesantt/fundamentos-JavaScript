let pessoa = {
    nome: "André",
    idade: 24, 
    dizerOlá() {
        console.log('Olá, mundo! Meu nome é ' + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOlá()