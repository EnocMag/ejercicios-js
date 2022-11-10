let fraccion = 0;
let potencia = 1;
let suma = 0;
let i = 1;

// for (let i = 0; i <= 20; i++){

//     potencia = potencia * 2;
//     decimal = 1 / potencia;
//     suma = suma + decimal;
//     console.log('Fracción: '+ decimal + ' Suma: ' + suma);
// }

const res = () => {
    potencia = potencia * 2;
    fraccion = 1 / potencia;
    suma = suma + fraccion;
    console.log('Potencia: ' + i + ' Fracción: '+ fraccion + ' Suma: ' + suma);
    i++;
    if (fraccion <= .00001){
        console.log('Fin');
    } else {
        res();
    }
}
res();

// while (fraccion > 0.000001){
//     fraccion = 1 / potencia;
//     potencia = potencia * 2;
//     suma = 1 - fraccion;
//     console.log('Frección: ' + fraccion + ' Suma: ' + suma);
// }

// let n = 1 - .25;
// console.log(n.toFixed(2)); // 75