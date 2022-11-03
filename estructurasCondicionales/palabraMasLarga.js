var prompt = require('prompt-sync')();

const palabra1 = prompt('Palabra 1: ');

const palabra2 = prompt('Palabra 2: ');

let nLetra1 = palabra1.length;
let nLetra2 = palabra2.length;
let masL = 0;

if(nLetra1 == nLetra2){
    console.log('Las dos palabras tienen el mismo largo');
}

if (nLetra1 > nLetra2){
    masL = nLetra1 - nLetra2;
    console.log('La palabra '+ palabra1 +' tiene '+ masL +' letras mas que '+ palabra2);
}else if (nLetra1 < nLetra2){
    masL = nLetra2 - nLetra1;
    console.log('La palabra '+ palabra2 +' tiene '+ masL +' letras mas que '+ palabra1);
}