var prompt = require('prompt-sync')();

// Escriba un programa que reciba como entrada un número entero n, y entregue como salida el n-ésimo número de Fibonacci

let k1 = 1;
let k2 = 1;
let k = 0;
let res = 0;
let x = 1;
const n = prompt('Ingrese el número: ');

// ciclo; res es menor que n, si la respuesta es si entonces repitete +1
// si no, ciclo; res es mayor que n, si ra respuesta es si ... entonces no es fibonacci
// si no, ciclo; res es igual a n, entonces ... es un numero fiboncci

const compara = () => {
    if (res > n){
        console.log(n + ' No es un número Fibonacci');
        return;
    }
    if (n === res){
        console.log(n + ' Es un número Fibonacci');
        return;
    }
    if (res < n){
        x++;
        ciclo();
    } 
}

const ciclo = () => {
    if (x == 1){
        res = 1;
    }
    if (x == 2){
        res = (x-1);
    }
    if (x > 2) {
        for (let i = 3; i <= x; i++){
            k = k1 + k2
            res = k;
            k1 = k2;
            k2 = k;
        }
    }
    compara();
}

ciclo();