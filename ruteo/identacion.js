// s = 0
// t = 0
// for i in range(3):
//     for j in range(3):
//         s = s + 1
//         if i < j:
//             t = t + 1
//     print t
//     print s

let s = 0;
let t = 0;
for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        s++;
        if (i < j){
            t++;
        }
    }
    console.log('t',t);
    console.log('s',s);
}