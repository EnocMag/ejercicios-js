var prompt = require('prompt-sync')();

const num = prompt('Introduce el número: ');
if((num % 2)==0){
    console.log('Su número es par');
}else{
    console.log('Su número es impar');
}

// var n = 7;
// var r = n % 2;
// console.log(r);