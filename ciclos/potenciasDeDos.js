var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese número: '));

let res = 1;

for (let i=0; i <= n; i++){
    console.log(res);
    res = res * 2;
}

// let i = 1;
// let res = 1;
// while(i <= n){
//     res = res * 2;
//     console.log(res);
//     i++;
// }