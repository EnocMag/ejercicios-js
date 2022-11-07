var prompt = require('prompt-sync')();

const estatura = parseFloat(prompt('Ingrese estatura en metros: '));
const peso = parseInt(prompt('Ingrese su peso en kilos: ')); 
const edad = parseInt(prompt('Ingrese su edad: '));

// const imc = peso / (estatura*estatura);
const imc = peso / Math.pow(estatura, 2);
if (edad < 45 && imc < 22){
    console.log('Su condición de riesgo es: Bajo');
}
if (edad >= 45 && imc < 22){
    console.log('Su condición de riesgo es: Medio');
}
if (edad < 45 && imc >= 22){
    console.log('Su condición de riesgo es: Medio');
}
if (edad >= 45 && imc >= 22){
    console.log('Su condición de riesgo es: Alto');
}