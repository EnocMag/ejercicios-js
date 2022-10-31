var prompt = require('prompt-sync')();

let q = prompt('¿Que tipo de longitud es (cm o in)?: ');

if(q == 'cm'){
    const long = parseFloat(prompt('Ingrese longitud: '));
    let res = long * .3937;
    console.log(long + ' cm = '+ res + ' in');
} else if (q == 'in') {
    const long = parseFloat(prompt('Ingrese longitud: '));
    let res = long * 2.54;
    console.log(long + ' in = '+ res + ' cm');
} else {
    console.log('Tipo de longitud no valida',)
}