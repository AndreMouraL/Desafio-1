// 6- Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
// node.js
let prompt = require('prompt-sync')();

console.log('Boas vindas ao nosso site!');

let nota = prompt ('Por favor, insira sua a nota do aluno:');
nota = Number(nota);

if (nota >=7){
    console.log('Aprovado!');
}else if  (nota >=5 && nota <7){
    console.log('Recuperação!');  
}else{
    console.log('Reprovado!');
}
 

//@AndreMouraL

//Navegador
/*alert('Boas vindas ao nosso site!');

let nota = prompt ('Por favor, insira sua a nota do aluno:');

if (nota >=7){
    alert('Aprovado!');
}else if  (nota >=5 && nota <7){
    alert('Recuperação!');  
}else{
    alert('Reprovado!');
}*/
