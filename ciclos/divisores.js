var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese el número: '));
let res = 0;

for (let i = 1; i <= n; i++){
    res = n % i;
    if (res == 0){
        console.log(i);
    }
}