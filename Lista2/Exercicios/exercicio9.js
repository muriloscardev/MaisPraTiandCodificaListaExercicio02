const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

function criarPares() {
  const pares = [];
  const qtd = parseInt(prompt('Quantos pares chave-valor deseja criar? '));

  for (let i = 0; i < qtd; i++) {
    console.log(`\nPar ${i + 1}:`);
    const chave = prompt('Chave: ');
    const valor = prompt('Valor: ');
    pares.push([chave, valor]);
  }
  
  return pares;
}

const pares = criarPares();
console.log('\nArray de pares criado:');
console.log(pares);

const objeto = paresParaObjeto(pares);
console.log('\nObjeto convertido:');
console.log(objeto);

const paresConvertidos = objetoParaPares(objeto);
console.log('\nPares convertidos de volta:');
console.log(paresConvertidos);