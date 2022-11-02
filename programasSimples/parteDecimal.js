var prompt = require('prompt-sync')();

const n = parseFloat(prompt('Ingrese un número: '));//1.19

const entero = Math.trunc(n); //entero = n = 1
let res = 0;

if (n > 0){
    res = Number((n-entero).toFixed(2)); // JS tiene un error en las operaciones con floats, que da resultados no exactos; se soluciona con Number y .toFixed
} //.toFixed lo que hace es limitar el numero de decimales que toma // Number elimina los decimales inecesarios 00's
if (n < 0){
    res = (Math.abs( Number((n-entero).toFixed(2)) ));
}

console.log(res);