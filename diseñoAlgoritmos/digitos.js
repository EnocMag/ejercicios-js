var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese número: '));
let d = 1;
let dRange = 10;
let sumD = 1;

const numeroDigitos = () => {
    if (n >= (d - 1) && n <= (dRange - 1)){
        console.log(n + ' tiene ' + sumD + ' digito');
    } else {
        sumD++;
        d = d * 10;
        dRange = dRange * 10;
        numeroDigitos();
    }
}

numeroDigitos();