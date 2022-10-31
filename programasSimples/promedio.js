var prompt = require('prompt-sync')();

const p1 = parseInt(prompt('Calificación 1: '));
const p2 = parseInt(prompt('Calificación 2: '));
const p3 = parseInt(prompt('Calificación 3: '));
const p4 = parseInt(prompt('Calificación 4: '));

const result = (p1 + p2 + p3 + p4) / 4;

console.log('Tu promedio es: ', result);
