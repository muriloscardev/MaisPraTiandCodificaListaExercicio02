const prompt = require('prompt-sync')();

function getNomesOrdenados(produtos) {
  return [...produtos]
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const qtd = parseInt(prompt('Quantos produtos deseja cadastrar? '));
const produtos = [];

for (let i = 0; i < qtd; i++) {
  console.log(`\nProduto ${i + 1}:`);
  
  const nome = prompt('Nome: ');
  const preco = parseFloat(prompt('Preço R$: ').replace(',', '.'));
  
  produtos.push({ nome, preco });
}

const nomesOrdenados = getNomesOrdenados(produtos);
console.log('\nProdutos ordenados por preço:');
console.log(nomesOrdenados);