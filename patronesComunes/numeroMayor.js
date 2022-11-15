var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese número: '));
let numero = 0;
let numeroMayor = 0;

for (let i = 1; i <= n; i++){
    numero = parseInt(prompt('Ingrese número: '));
    if (numero >= numeroMayor){
        numeroMayor = numero;
    }   
}
console.log('El mayor es:',numeroMayor);