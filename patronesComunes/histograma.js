var prompt = require('prompt-sync')();
let n = 1;
let positivos = 0;
let negativos = 0;
let asterisco = '*';

console.log('Ingrese varios valores, termine con cero:');
while (n != 0){
    n = parseInt(prompt('n: '));
    if (n > 0){
        positivos++;
    }
    if (n < 0){
        negativos++;
    }
}

console.log('Positivos:', asterisco.repeat(positivos));
console.log('Negativos:', asterisco.repeat(negativos));