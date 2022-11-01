var prompt = require('prompt-sync')();

const hActual = parseInt(prompt('Hora actual: '));
const hFutura = parseInt(prompt('Cantidad de horas: '));

let hA = hActual;
let hF = hFutura;

let res = hA + hF;

if (res > 24 && res < 48){
    res = res - 24;
}

if (res > 48){
    res = res - 48;
}

console.log('En '+ hFutura + ' horas, el reloj marcara las '+ res);