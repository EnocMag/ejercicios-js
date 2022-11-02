var prompt = require('prompt-sync')();

const year = prompt('Ingrese el año: ');

const t = () => {
    console.log(year + ' es bisiesto');
}
const f = () => {
    console.log(year + ' no es bisiesto');
}

const greg = () => {
    if ((year%400)==0){
        t()
    }else{
        f()
    }
}

const sigloB = () => {
    if ((year%100)==0){
        greg();
    }else{
        t();
    }
}

if ((year % 4)==0){
    sigloB()
}else {
    f()
}