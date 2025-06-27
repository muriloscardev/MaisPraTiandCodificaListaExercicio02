const prompt = require('prompt-sync')();

function fatorial(n) {
  if (n < 0) {
    throw new Error('Número negativo não tem fatorial.'); 
  }
  if (n === 0) {
    return 1; 
  }
  return n * fatorial(n - 1);
}

try {
  let numero = parseInt(prompt('Digite um número para calcular o fatorial: '));
  let resultado = fatorial(numero);
  console.log(`${numero}! = ${resultado}`);
} catch (erro) {
  console.log('Erro: ', erro.message);
}
