function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(7)

// dobro()

function Dizerola(nome = 'mundo') {
    alert("Olá, " + nome + "!")
}


// Dizerola('André')
// Dizerola()

function soma(a, b) {
    alert("Resultado da soma é " + (a + b))
}

// soma(7, 6)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { 
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { 
        nome, 
        email,
        senha,
        tipo 
    }
    console.log(usuario)
  }
  
  criarUsuario("Isaac", "isaac@email.com", "1234")
  novoUsuario("Isaac", "isaac@email.com", "1234")