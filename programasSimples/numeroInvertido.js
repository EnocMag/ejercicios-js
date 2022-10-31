var prompt = require('prompt-sync')();

let numero = prompt('Introduce tres digitos: ');

const invenrt = (inv) => {
    return inv.split("").reverse().join("");
} //El metodo split() separa un objeto de cadena en un arreglo de cadena al separar la cadena en subcadenas
// El metodo reverse() invierte un arreglo
// El metodo join() une todos los elementos de un arreglo en un string

//  console.log('' + inv);
console.log('Numero invertido: ',invenrt(numero));