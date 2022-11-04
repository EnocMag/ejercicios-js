var prompt = require('prompt-sync')();

// de menor a mayor de dos numeros

// const n1 = parseInt(prompt('Ingrese numero: '));
// const n2 = parseInt(prompt('Ingrese numero: '));

// if (n1 > n2){
//     console.log(n2 +" "+ n1);
// } else {
//     console.log(n1 +" "+ n2);
// }

// de menor a mayor de cuatro numeros

const n1 = parseInt(prompt('Ingrese numero: '));
const n2 = parseInt(prompt('Ingrese numero: '));
const n3 = parseInt(prompt('Ingrese numero: '));
const n4 = parseInt(prompt('Ingrese numero: '));

const arr = [n1, n2, n3, n4]
const comparar = (a,b) => {
    return a - b;
}
arr.sort(comparar);

console.log(arr);