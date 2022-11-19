var prompt = require('prompt-sync')();

const n = parseInt(prompt('Cuantos números: '));
let x = 1;
let h = 0;
let denominador = 0;

for (let i = 1; i <= n; i++){
    x = prompt('n' + i + ' = ');
    denominador = denominador + (1 / x);
}

h = n / denominador;
console.log('H = ' + h);