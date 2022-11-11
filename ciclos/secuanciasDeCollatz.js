let n = parseInt(0);
let i = 0;
let asterisco = '*';

const res = (n) => {
    
    if ((n % 2) == 0){
        n = n / 2;
        i++;
    } else {
        n = (n * 3) + 1;
        i++;
    }
    
    if (n != 1){
        res(n);
    } else {
        console.log(asterisco.repeat(i));
        i = 0;
    }
}

for (let x = 1; x <= 20; x++){
    console.log(x);
    n = x;
    res(n);
}