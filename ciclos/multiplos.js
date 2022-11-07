var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese un número: '));

for (let i=1; i <= 10; i++){
    let res = n * i;
    console.log(n + ' x ' + i + ' = ' + res);
}