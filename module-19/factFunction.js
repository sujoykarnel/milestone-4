function getFactorial(number){
    let fact = 1;
    for (let i=1; i<number; i++){
        fact *=i;
    };
    return fact;
};

// let myfactorial = getFactorial(7);
// console.log("Factorial : ", myfactorial);
console.log("Factorial : ", getFactorial(7));

// let yourfact=getFactorial(10);
// console.log("Your Factorial: ", yourfact);
console.log("Your Factorial: ", getFactorial(10));

