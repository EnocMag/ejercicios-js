var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese número: '));

let s1 = 0;
let s2 = 0;

for (let i = 1; i <= n; i++){
    s1 = s1 + i;
}
console.log('s1:', s1);

s2 = (n * (n + 1)) / 2;

console.log('s2', s2);

if (s1 == s2){
    console.log('Son iguales');
} else {
    console.log('No son iguales');
}