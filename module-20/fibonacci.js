/* const fibo = [0, 1];
for (let i=2; i<20; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
};

console.log(fibo); */

function getFibo(num) {
    if (typeof num != "number"){
        return "Please Enter the number"
    } else if( num<=2){
        return "Please enter greater than 2"
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo
};

const myFibo = getFibo(3);
console.log(myFibo);