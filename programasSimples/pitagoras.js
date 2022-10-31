var prompt = require('prompt-sync')();

const cA = prompt('Ingrese el cateto a: ');
const cB = prompt('Ingrese el cateto b: ');

const result = Math.sqrt((cA*cA) + (cB*cB));

console.log('La hipotenusa es: ',result);