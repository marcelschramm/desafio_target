// Função que calcula o n-ésimo número da sequência de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }
  
  // Pede ao usuário para informar um número
  let numero = parseInt(prompt("Informe um número:"));
  
  // Verifica se o número pertence à sequência de Fibonacci
  let pertence = false;
  let i = 0;
  while (fibonacci(i) <= numero) {
    if (fibonacci(i) === numero) {
      pertence = true;
      break;
    }
    i++;
  }
  
  // Imprime o resultado
  if (pertence) {
    console.log("O número " + numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log("O número " + numero + " não pertence à sequência de Fibonacci.");
  }