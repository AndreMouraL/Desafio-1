//Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
// função para calcular a área

function CAC(raio) {
    // Fórmula da área: A = π * r²
    let pi = 3.14; 
    let area = pi * (raio * raio);
    return area; 
}

// Pedir o raio ao usuário
let raio = prompt("Digite o raio do círculo:");

// Converter o raio para número
raio = parseFloat(raio);

// Chamar a função para calcular a área
let area = CAC(raio);

// Mostrar o resultado
alert("A área do círculo é: " + area.toFixed(2));

//@AndreMoural