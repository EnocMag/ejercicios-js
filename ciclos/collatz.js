var prompt = require('prompt-sync')();

let n = parseInt(prompt('n: '));

const res = () => {

    if ((n % 2) == 0){
        n = n / 2;
        console.log(n);
    } else {
        n = (n * 3) + 1;
        console.log(n);
    }

    if (n != 1){
        res();
    } else {
        console.log('Fin');
    }
}

res();