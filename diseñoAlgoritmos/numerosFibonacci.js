var prompt = require('prompt-sync')();

// Escriba un programa que reciba como entrada un número entero n, y entregue como salida el n-ésimo número de Fibonacci
let k1 = 1;
let k2 = 1;
let k = 0;
let res = 0;
const n = prompt('Ingrese el número: ');

if (n == 1){
    res = 1;
}
if (n == 2){
    res = (n-1);
}
if (n > 2) {
    for (let i = 3; i <= n; i++){
        k = k1 + k2
        res = k;
        k1 = k2;
        k2 = k;
    }
}

console.log('F' + n, ' = ', res);