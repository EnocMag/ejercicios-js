var prompt = require('prompt-sync')();

const n = parseInt(prompt('Introduce número: '));
let res = 1;

if (n >= 0){
    if (n == 0){
        res = 1;
        console.log(res);
    }
    for (let i = 1; i <= n; i++){
        res = res * i;
        console.log(res);
    }
} else {
    console.log('Número invalido');
}


