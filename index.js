
// 1 - Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
   K = K + 1; 
   SOMA = SOMA + K; 
}

alert(SOMA);

// 2- Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function checkNumberFibonacci(finalNumber){
   let mensage = `${finalNumber} não pertence a sequência Fibonacci`;
   let fibonacciSequence = [0, 1];
   let nextNumber = fibonacciSequence[0] + fibonacciSequence[1];
   
   while (nextNumber <= finalNumber) {
      fibonacciSequence.push(nextNumber);
      let lastIndex = fibonacciSequence.length - 1;
      nextNumber = fibonacciSequence[lastIndex] + fibonacciSequence[lastIndex - 1];
   }

   if (fibonacciSequence.includes(finalNumber)) {
      mensage = `${finalNumber} pertence a sequência Fibonacci`;
   }
    
   return mensage;
}

alert(checkNumberFibonacci(13))