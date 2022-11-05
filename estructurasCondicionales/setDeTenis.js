var prompt = require('prompt-sync')();

const jA = parseInt(prompt('Juegos ganados por A: '));
const jB = parseInt(prompt('Juegos ganados por B: '));

if ((jA < 6 && jB < 6) || (jA === 5 && jB === 6) || (jA === 6 && jB === 5)){
    console.log('Aun no termina');
}
if (jA > 7 || jB > 7){
    console.log('Invalido');
}
if ((jA === 7 && jB < 5) || (jB === 7 && jA < 5)){
    console.log('Invalido');
}
if ((jA === 6 && jB <= 4) || (jA === 7 && jB === 6) || (jA === 7 && jB === 5)){
    console.log('Gano A');
}
if ((jB === 6 && jA <= 4) || (jB === 7 && jA === 6) || (jB === 7 && jA === 5)){
    console.log('Gano B');
}