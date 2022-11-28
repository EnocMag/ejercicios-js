var prompt = require('prompt-sync')();

let n = 0;
let i = 1;
let intento = 0; 

const numberRandom = () => {
    n = (Math.floor(Math.random() * 101));
}
numberRandom();

const guess = () => {
    intento = parseInt(prompt('Intento ' + i + ': '));
    if (intento < n){
        console.log('Es mayor que ' + intento);
    }
    if (intento > n){
        console.log('Es menor que ' + intento);
    } 
    if (intento == n){
        console.log('Correcto, Adivinaste en ' + i + ' intentos');
        return;
    } else {
        i++;
        guess();
    }
}

guess();