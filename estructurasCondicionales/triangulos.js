var prompt = require('prompt-sync')();

const a = parseInt(prompt('Ingrese a: '));
const b = parseInt(prompt('Ingrese b: '));
const c = parseInt(prompt('Ingrese c: '));
let valid = true;

const noValid = () => {
    console.log('No es un triangulo valido');
}
const isocelesP = () => {
    console.log('El triangulo es isoceles');
}
const escalenoP = () => {
    console.log('El triangulo es escaleno');
}
const equilateroP = () => {
    console.log('El triangulo es equilatero');
}

// triangulo no valido
if (a > (b + c)){
    noValid();
    valid = false;
}
if (b > (a + c)){
    noValid();
    valid = false;
}
if (c > (a + b)){
    noValid();
    valid = false;
}


if (valid == true){
    let isocelesValid = false;
    let equilateroValid = false;
    // triangulo equilatero
    if (a == b && a == c && b == c){
        equilateroP();
        equilateroValid = true;
    }
    // triangulo isoceles
    if (a == b && equilateroValid == false){
        isocelesP();
        isocelesValid = true;
    }
    if (b == c && equilateroValid == false){
        isocelesP();
        isocelesValid = true;
    }
    if (c == a && equilateroValid == false){
        isocelesP();
        isocelesValid = true;
    }

    // triangulo escaleno
    if (a != b && a != c && isocelesValid == false){
        escalenoP();

    } else if (b != a && b != c && isocelesValid == false){
        escalenoP();

    } else if (c != a && c != b && isocelesValid == false){
        escalenoP();

    }
} 