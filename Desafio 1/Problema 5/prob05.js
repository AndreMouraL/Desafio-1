//Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
// No node.js

console.log('Boas vindas ao nosso site!');
// Solicita a idade do usuário
let idade = prompt ('Por favor, insira sua idade:');

// Converte a entrada para um número
idade = Number(idade);

// Verificação da maioridade
if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}
// Caso queira para terminal node.js altere a função alert pra console.log que funcionarar.
//@AndreMouraL