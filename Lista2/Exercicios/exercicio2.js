const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativa;
let tentativas = 0;

console.log('Tente acertar o número entre 1 e 100.');

do {
  tentativa = parseInt(prompt('Digite seu palpite: '));
  tentativas++;

  if (tentativa < numeroSecreto) {
    console.log('Mais alto!');
  } else if (tentativa > numeroSecreto) {
    console.log('Mais baixo!');
  }

} while (tentativa !== numeroSecreto);

console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);