var prompt = require('prompt-sync')();
//Leer el primer numero
const n1 = parseInt(prompt("Escribe el numero 1: "));
//Leer el segundo numero
const n2 = parseInt(prompt("Escribe el numero 2: "));

const n3 = parseInt(prompt("Escribe el numero 3: "));

//Validar el mayor

let mayor = 0;

if (n1 > n2){
    mayor = n1;
} else {
    mayor = n2;
} //else if (n3 > mayor){
//     mayor = n3;
// }

if(n3 > mayor){
    mayor = n3;
}

console.log('El numero ' + mayor + ' es mayor');