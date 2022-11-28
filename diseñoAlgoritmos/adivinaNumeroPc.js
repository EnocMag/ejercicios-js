var prompt = require('prompt-sync')();

let n1 = 0;
let n2 = 100;
let intento = 0;
let clue = '';
let i = 1;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const guess = () => {
    intento = getRandomIntInclusive(n1, n2);
    console.log('Intento ' + i + ': ', intento);
    clue = prompt('Pista: ');

    if (clue == '>'){
        n1 = intento;
    }
    if (clue == '<'){
        n2 = intento;
    }
    if (clue == '='){
        console.log('Adivine en ' + i + ' intentos :D');
        return;
        
    }else{
        i++;
        guess();
    }
}

guess();