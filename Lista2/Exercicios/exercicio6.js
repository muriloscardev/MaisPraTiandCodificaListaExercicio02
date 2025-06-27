const prompt = require('prompt-sync')();

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave] !== undefined) {
      console.log('Resultado do cache:', cache[chave]);
      return cache[chave];
    }

    const resultado = fn(...args);
    cache[chave] = resultado;
    console.log('Calculado:', resultado);
    return resultado;
  };
}

function fatorial(n) {
  if (n < 0) throw new Error('Número invalido.');
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

while (true) {
  let entrada = prompt("Digite um número para calcular fatorial (ou 'sair'): ");
  if (entrada.toLowerCase() === 'sair') break;
  let n = parseInt(entrada);
  try {
    let resultado = fatorialMemo(n);
    console.log(`Resultado: ${resultado}`);
  } catch (e) {
    console.log('Erro:', e.message);
  }
}