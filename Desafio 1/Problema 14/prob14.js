//14- Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.

//Insersão dos numero para  calcular a soma de dois numeros e captura os números digitados pelo usuário e converte para números
let prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt('Insira o primeiro número:')); // parseFloat string para ponto flutunate.
let numero2 = parseFloat(prompt('Insira o segundo número:'));

// Realiza a soma dos dois números
let resultado = numero1 + numero2;

// Exibe o resultado em um alerta
console.log('A soma de ' + numero1 + ' e ' + numero2 + ' é: ' + resultado);
//@AndreMoural