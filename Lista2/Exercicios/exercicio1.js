const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12) {
    return false;
  }

  let diasMes;

  if (mes === 2) {
    let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    diasMes = bissexto ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(mes)) {
    diasMes = 30;
  } else {
    diasMes = 31;
  }

  return dia >= 1 && dia <= diasMes;
}

let dia = parseInt(prompt("Digite o dia: "));
let mes = parseInt(prompt("Digite o mês: "));
let ano = parseInt(prompt("Digite o ano: "));

if (ehDataValida(dia, mes, ano)) {
  console.log(" A data é valida!");
} else {
  console.log(" A data é invalida!");
}