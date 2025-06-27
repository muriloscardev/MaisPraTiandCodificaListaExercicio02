const prompt = require('prompt-sync')();

let frase = prompt('Digite uma frase: ');
let palavras = frase.split(' ');
let unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let contagem = 0;

  for (let j = 0; j < palavras.length; j++) {
    if (palavras[j] === palavraAtual) {
      contagem++;
    }
  }

  if (contagem === 1) {
    unicas.push(palavraAtual);
  }
}

console.log('Palavras únicas: ', unicas);