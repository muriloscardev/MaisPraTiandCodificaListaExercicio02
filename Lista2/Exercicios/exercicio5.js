const prompt = require('prompt-sync')();

const debouncing = () => {
    const delay = getDelayInput();
    const callFn = debounce(logFunc, delay);
    callFn();
    console.log(`\nA mensagem será exibida apenas uma vez após ${delay} ms.`);
}

const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const logFunc = () => {
    console.log('Eu fui chamado depois do intervalo setado!');
}

const getDelayInput = () => {
    let input = prompt('Digite o intervalo desejado em milissegundos: ');
    console.log('\n');

    while (isNaN(input)) {
        console.log('Valor inválido! Por favor, insira um número válido.');
        input = prompt('Digite o intervalo desejado em milissegundos: ');
        console.log('\n');
    }

    return parseInt(input);
}

debouncing();