var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese número: '));

for (let i = 1; i <= n; i++){
    if (i % 3 != 0){
        if (i % 7 != 0){
            console.log(i);
        }
    }
}