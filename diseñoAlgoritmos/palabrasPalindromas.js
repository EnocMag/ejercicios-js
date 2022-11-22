var prompt = require('prompt-sync')();

const palabra = prompt('Ingrese palabra: ');
let word = palabra.replace(/ /g, "");
let wordReverse = palabra.replace(/ /g, "").split("").reverse().join("");

if (word == wordReverse){
    console.log('Es palindromo');
} else {
    console.log('No es palindromo');
}