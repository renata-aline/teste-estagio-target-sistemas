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

function checkNumberFibonacci(finalNumber) {
  let mensage = `${finalNumber} não pertence a sequência Fibonacci`;
  let fibonacciSequence = [0, 1];
  let nextNumber = fibonacciSequence[0] + fibonacciSequence[1];

  while (nextNumber <= finalNumber) {
    fibonacciSequence.push(nextNumber);
    let lastIndex = fibonacciSequence.length - 1;
    nextNumber =
      fibonacciSequence[lastIndex] + fibonacciSequence[lastIndex - 1];
  }

  if (fibonacciSequence.includes(finalNumber)) {
    mensage = `${finalNumber} pertence a sequência Fibonacci`;
  }

  return mensage;
}

alert(checkNumberFibonacci(13));

// 3- Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

fetch("faturamento.json")
  .then((response) => response.json())
  .then((faturamento) => {
    const values = faturamento
      .map((dia) => dia.valor)
      .filter((valor) => valor > 0);

    const lowestValue = Math.min(...values);
    const highestValue = Math.max(...values);

    const total = values.reduce((acumulado, valor) => acumulado + valor, 0);
    const average = total / values.length;

    const aboveAverageDay = values.filter((valor) => valor > average).length;

    alert(`Menor valor de faturamento: ${lowestValue.toFixed(2)}`);
    alert(`Maior valor de faturamento: ${highestValue.toFixed(2)}`);
    alert(
      `Número de dias com faturamento superior à média: ${aboveAverageDay}`
    );
  });

// 4- Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const invoicing = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const states = Object.keys(invoicing);
let monthlyTotal = 0;

for (let i = 0; i < states.length; i++) {
  monthlyTotal += invoicing[states[i]];
}

alert(`Valor total do faturamento: R$${monthlyTotal.toFixed(2)}`);

for (let i = 0; i < states.length; i++) {
  const state = states[i];
  const value = invoicing[state];
  const percentage = (value / monthlyTotal) * 100;
  alert(`Percentual  ${state}: ${percentage.toFixed(2)}%`);
}

// 5- Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
  let message = "";

  for (let i = str.length - 1; i >= 0; i--) {
    message += str[i];
  }

  return message;
}

alert(inverterString("Hello World!"));
