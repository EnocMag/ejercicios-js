var prompt = require('prompt-sync')();
let hoy = new Date();
let d = hoy.getDate();
let m =  hoy.getMonth() + 1;
let an = hoy.getFullYear();

const dia = parseInt(prompt('Día: '));
const mes = parseInt(prompt('Mes: '));
const anno = parseInt(prompt('Año: '));

let edad = an - anno;

if(m < mes){
    edad--;
} else if (m = mes){
    if (d < dia){
        edad--;
    }
}

console.log('Usted tiene ' + edad + ' años');