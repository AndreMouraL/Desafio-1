//3- Crie uma variável chamada “preco” com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
//No node.js
console.log('Boas vindas ao nosso site!');

let preco = 50; // Preço original
let desconto = 0.2; // Desconto de 20%

// Calculando o preço com desconto
let precoComDesconto = preco - (preco * desconto);

console.log(`O preço final com desconto é: R$${precoComDesconto}`);

/*// no terminal node.js
let preco = 50; // Preço original
let desconto = 0.2; // 20% de desconto

// Exibindo o valor final diretamente
alert(`O preço final com desconto é: R$${(preco -(preco * desconto)).toFixed(2)}`);*/

//@AndreMouraL