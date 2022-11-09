var prompt = require('prompt-sync')();

let tiempo;
let res = 0;
let hrs = 0;
let min = 0;

while (tiempo != 0){
    tiempo = parseInt(prompt('Duración tramo: '));
    res = res + tiempo;
}

const tiempoH = () => {
    if (res >= 60){
        hrs = hrs + 1;
        res = res - 60;
        min = res;
        if (res < 10){
            min = '0' + res;
        }
        tiempoH();
    }
}

tiempoH();

console.log('Tiempo total de viaje:', hrs + ':' + min);