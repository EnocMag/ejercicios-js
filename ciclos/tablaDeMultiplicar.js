let arr = [];
for(let i = 1; i <= 10; i++){
    for (let n = 1; n <= 10; n++){
        let res = i * n;
        // console.log(res);
        arr.push(res);
    }
    console.log(arr);
    for (let p = 1; p <= 10; p++){
        arr.pop();
    }
}