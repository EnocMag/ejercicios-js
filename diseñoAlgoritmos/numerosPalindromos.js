var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese un numero: '));

const palindromo = (pal) => {
    if ((pal.toString().split("").reverse().join("")) == pal.toString().split()){
        console.log(pal ,'es palindromo');
    } else {
        console.log(pal ,'no es palindromo');
    }
}
 
// console.log(n.split());
palindromo(n);