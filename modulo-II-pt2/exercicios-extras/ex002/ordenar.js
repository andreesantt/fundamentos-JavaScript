function ordenar(){
    const numeros = [5, 4, 2, 1, 3, 0, 7, 8, 9, 6]
    return numeros.sort((a, b) => a - b);
}

console.log(ordenar());