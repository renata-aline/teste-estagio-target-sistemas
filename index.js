
// 1 - Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// const INDICE = 13;
// let SOMA = 0;
// let K = 0;

// while (K < INDICE) {
//    K = K + 1; 
//    SOMA = SOMA + K; 
// }

// alert(SOMA);

// 2- Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// function checkNumberFibonacci(finalNumber){
//    let mensage = `${finalNumber} não pertence a sequência Fibonacci`;
//    let fibonacciSequence = [0, 1];
//    let nextNumber = fibonacciSequence[0] + fibonacciSequence[1];
   
//    while (nextNumber <= finalNumber) {
//       fibonacciSequence.push(nextNumber);
//       let lastIndex = fibonacciSequence.length - 1;
//       nextNumber = fibonacciSequence[lastIndex] + fibonacciSequence[lastIndex - 1];
//    }

//    if (fibonacciSequence.includes(finalNumber)) {
//       mensage = `${finalNumber} pertence a sequência Fibonacci`;
//    }
    
//    return mensage;
// }

// alert(checkNumberFibonacci(13))

// 3- Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

fetch('faturamento.json')
  .then(response => response.json())
  .then(faturamento => {
    
    const values = faturamento.map(dia => dia.valor).filter(valor => valor > 0);
    
    const lowestValue = Math.min(...values);
    const highestValue = Math.max(...values);

    const total = values.reduce((acumulado, valor) => acumulado + valor, 0);
    const average = total / values.length;

    const aboveAverageDay = values.filter(valor => valor > average).length;

    alert(`Menor valor de faturamento: ${lowestValue.toFixed(2)}`);
    alert(`Maior valor de faturamento: ${highestValue.toFixed(2)}`);
    alert(`Número de dias com faturamento superior à média: ${aboveAverageDay}`);
  })


