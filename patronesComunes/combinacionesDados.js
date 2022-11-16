var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese número: '));

let res = 0;

for (let i = 1; i <= 6; i++){
    for (let y = 1; y <= 6; y++){
        if (i + y == n){
            res++;
        }
    }
    y = 1;
}

console.log('Hay ' + res + ' combinaciones para obtener ' + n);