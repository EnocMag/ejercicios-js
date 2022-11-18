var prompt = require('prompt-sync')();

const cantidadPalabras = parseInt(prompt('Cantidad de palabras: '));
let palabra = '';
let masLarga = '';
let masCorta = '          ';

for (let i = 1; i <= cantidadPalabras; i++){
    palabra = prompt('Palabra ' + i + ': ');
    if (palabra.length > masLarga.length){
        masLarga = palabra;
    }
    if (palabra.length < masCorta.length){
        masCorta = palabra;
    }
}

console.log('La palabra más larga es', masLarga);
console.log('La palabra más corta es', masCorta);