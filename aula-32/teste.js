let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"

frutas[1] = "morango";
console.log(frutas[1]); // "morango"


console.log(frutas.length); // 3

frutas.push("uva");
console.log(frutas); // ["maçã", "morango", "laranja", "uva"]


frutas.pop();
console.log(frutas); // ["maçã", "morango", "laranja"]
