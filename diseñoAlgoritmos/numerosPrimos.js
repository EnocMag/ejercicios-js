var prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingrese un numero: '));
let primo;

if (n == 2 || n == 3 || n == 5 || n == 7 || n == 11 || n == 13 || n == 17 || n == 19){
    console.log(n + ' es primo');
} else {
    for (let i = 1; i <= n; i++){
        if (i % 2 != 0){
            if (i % 3 != 0){
                if (i % 5 != 0){
                    if (i % 7 != 0){
                        if (i % 11 != 0){
                            if (i % 13 != 0){
                                if (i % 17 != 0){
                                    if (i % 19 != 0){
                                        if (i == n){
                                            primo = true;
                                        } else {
                                            primo = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    if (primo == true){
        console.log(n + ' es primo');
    } else {
        console.log(n + ' es compuesto');
    }
}