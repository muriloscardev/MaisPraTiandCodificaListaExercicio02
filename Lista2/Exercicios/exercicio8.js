const prompt = require('prompt-sync')();

function calcularTotais(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

const qtd = parseInt(prompt('Quantas vendas deseja registrar? '));
const vendas = [];

for (let i = 0; i < qtd; i++) {
  console.log(`\nVenda ${i + 1}:`);
  
  const cliente = prompt('Cliente: ');
  const total = parseFloat(prompt('Valor R$: ').replace(',', '.'));
  
  vendas.push({ cliente, total });
}

const totais = calcularTotais(vendas);
console.log('\nTotais por cliente:');
console.log(totais);