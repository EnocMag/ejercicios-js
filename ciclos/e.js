let e = 1;
let n = 1;
let factorial = 0;
let count = 1;
let res = 1;
const calculaE = () => {
    for(let i = 1 ; i <= 20; i++){
        for(let x = 1 ; x <= i; x++){
                n = n * x;
            }
        factorial = 1 / n;
        e = e + factorial;
        n = 1;
        factorial = 0;
        }
    console.log('e', e);
}
    
calculaE();

// const calculaE = () => {
//     let i = 1;
//         for(let x = 1 ; x <= i; x++){
//             n = n * x;
//         }
//         factorial = 1 / n;
//         e = e + factorial;
//         n = 1;
//         factorial = 0;
//     i++;
//     if (e <= .0001){
//         console.log('e', e);
//         return;
//     } else {
//         calculaE();
//     }
// }
// calculaE();