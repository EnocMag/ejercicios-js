var prompt = require('prompt-sync')();

const dividendo = prompt('Dividendo: ');
const divisor = prompt('Divisor: ');

const cos = dividendo / divisor;
const res = dividendo % divisor;

if (res==0){
    console.log('La división es exacta');
}else{
    console.log('La división no es exacta',)
}
console.log(Math.trunc(cos));
console.log(res);