var prompt = require('prompt-sync')();

let n = parseInt(prompt('n: '));
let i = 0;
let asterisco = '*';

const res = () => {

    if ((n % 2) == 0){
        n = n / 2;
        console.log(n);
        i++;
    } else {
        n = (n * 3) + 1;
        console.log(n);
        i++;
    }

    if (n != 1){
        res();
    } else {
        console.log('Fin');
    }
}

res();