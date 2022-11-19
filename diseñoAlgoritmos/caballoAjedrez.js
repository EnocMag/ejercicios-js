var prompt = require('prompt-sync')();

console.log('Ingrese coordenadas del caballo');

const fila = parseInt(prompt('Fila: '));
const columna = parseInt(prompt('Columna: '));
let f = 0;
let c = 0;

const reset = () => {
    f = fila;
    c = columna;
}

const validaPosicion = () => {
    if (f >= 1 && f <= 8 && c >= 1 && c <= 8){
        console.log(f, c);
    }
}

const posicionesCaballo = () => {
    reset();
    f = f - 2;
    c = c - 1;
    validaPosicion();
    reset();
    f = f - 2;
    c = c + 1;
    validaPosicion();
    reset();
    f = f - 1;
    c = c - 2;
    validaPosicion();
    reset();
    f = f - 1;
    c = c + 2;
    validaPosicion();
    reset();
    f = f + 1;
    c = c - 2;
    validaPosicion();
    reset();
    f = f + 1;
    c = c + 2;
    validaPosicion();
    reset();
    f = f + 2;
    c = c - 1;
    validaPosicion();
    reset();
    f = f + 2;
    c = c + 1;
    validaPosicion();
}

if (fila > 8 || fila < 1 || columna > 8 || columna < 1){
    console.log('Posición invalida');
} else {
    posicionesCaballo();
}