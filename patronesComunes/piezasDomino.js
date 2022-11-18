
let domino = 0;
let totalFichas = 0;
let totalPuntos = 0;

for (let i = domino; i <= 6; i++){
    for (let x = domino; x <= 6; x++){
        console.log(i, x);
        totalPuntos = totalPuntos + (i + x);
        totalFichas++;
    }
    domino++;
}
console.log('Fichas totales: ' + totalFichas);
console.log('Puntos totales: ' + totalPuntos);