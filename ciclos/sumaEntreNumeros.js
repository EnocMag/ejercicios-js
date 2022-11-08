var prompt = require('prompt-sync')();

const n1 = parseInt(prompt('Ingrese numero: '));
const n2 = parseInt(prompt('Ingrese numero: '));
let res = 0;

for (let i = n1+1; i < n2; i++){
    res = res + i;
}
console.log('La suma es:', res);