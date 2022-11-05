var prompt = require('prompt-sync')();

const n1 = parseInt(prompt('Operando: '));
const o = prompt('Operador: ');
const n2 = parseInt(prompt('Operando: '));

let res = 0;

const print = () => {
    console.log(n1 + ' '+ o +' ' + n2 + ' = ' + res);
}

if (o == '/'){
    res = n1 / n2;
    print();
}

if (o == '+'){
    res = n1 + n2;
    print();
}

if (o == '*'){
    res = n1 * n2;
    print();
}

if (o == '-'){
    res = n1 - n2;
    print();
}