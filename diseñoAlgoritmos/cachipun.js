var prompt = require('prompt-sync')();

let marcadorA = 0;
let marcadorB = 0;

const printMarcador = () => {
    console.log(marcadorA + ' + ' + marcadorB);
}

const cachipun = () => {
    
    const a = prompt('A: ');
    const b = prompt('B: ');

    if (a == b){
        printMarcador();
    } else if (a == 'piedra' && b == 'tijera') { // A
        marcadorA++;
        printMarcador();
    } else if (a == 'tijera' && b == 'papel' ) {
        marcadorA++;
        printMarcador();
    } else if (a == 'papel' && b == 'piedra' ){
        marcadorA++;
        printMarcador();
    } else if (b == 'piedra' && a == 'tijera') { // B
        marcadorB++;
        printMarcador();
    } else if (b == 'tijera' && a == 'papel' ) {
        marcadorB++;
        printMarcador();
    } else if (b == 'papel' && a == 'piedra' ){
        marcadorB++;
        printMarcador();
    }

    if ((marcadorA || marcadorB) == 3){
        if (marcadorA > marcadorB){
            console.log('A es el ganador');
        } else {
            console.log('B es el ganador');
        }
    } else {
        cachipun();
    }
}

cachipun();