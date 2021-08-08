// let numbers= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let sum = 0;
// for (let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }

// console.log(sum);


const myArray= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function arrayTotal (numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal(myArray);
console.log(total);