//10- Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
//No node.js
let prompt = require('prompt-sync')();
console.log('Boas vindas ao nosso site!');
let numero;

// Loop enquanto o número digitado não for 5
while (numero !== 5) {
    numero = parseInt(prompt("Digite um número:"))
    // Verifica se o número é 5
    if (numero == 5) {
        console.log("Parabéns! Você digitou o número 5.");
        break;
    } else {
        console.log("Tente novamente.");
    }
}
//Navegador
/*alert('Boas vindas ao nosso site!');
let numero;

// Loop enquanto o número digitado não for 5
while (numero !== 5) {
    numero = parseInt(prompt("Digite um número:"))
    // Verifica se o número é 5
    if (numero == 5) {
        alert("Parabéns! Você digitou o número 5.");
        break;
    } else {
        alert("Tente novamente.");
    }
}*/

//@AndreMoural