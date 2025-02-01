/*15. Refatore o código abaixo para ser mais legível, usando boas práticas de nomenclatura e separando o código em funções:

x = 10

y = 20

z = x+y

console.log(z)*/

// Função para somar dois números
function somarNumeros(numero1, numero2) {
    // Retornar a soma dos dois números
    return numero1 + numero2;
  }
  
  // Função principal para executar o programa
  function executarPrograma() {
    // Declaração de variáveis com valores iniciais
    let primeiroNumero = 10; 
    let segundoNumero = 20;  
  
    // Chama a função de soma e armazena o resultado
    let resultado = somarNumeros(primeiroNumero, segundoNumero);
  
    // resultado no console
    console.log("O resultado da soma é: " + resultado);
  }
  
  // função principal para iniciar o programa
  executarPrograma();
  