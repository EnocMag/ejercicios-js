var prompt = require('prompt-sync')();

// cuadrado
// const altura = parseInt(prompt('Altura: '));
// const ancho = parseInt(prompt('Ancho: '));
// let asterisco = '*';
// for(let i= 1 ; i <= altura; i++){
//     console.log(asterisco.repeat(ancho));
// }

// triangulo
// const alt = parseInt(prompt('Altura: '));
// let asterisco = '*';
// let anch;
// for(let i= 1 ; i <= alt; i++){
//     for(let x= 1 ; x <= i; x++){
//         anch = x;
//     }
//    console.log(asterisco.repeat(anch)); 
// }

// hexagono
const lado = parseInt(prompt('Lado: '));
let asterisco = '*';
let espacio = ' ';
let anEsp = lado - 1;
let alto =(lado - 1);
let an = lado

console.log(espacio.repeat(anEsp) + asterisco.repeat(an));

for (let i= 1 ; i <= alto; i++){
    anEsp--;
    an = an + 2;
    console.log(espacio.repeat(anEsp) + asterisco.repeat(an));
}
for (let i= 1 ; i <= alto; i++){
    anEsp++;
    an = an - 2;
    console.log(espacio.repeat(anEsp) + asterisco.repeat(an));
}