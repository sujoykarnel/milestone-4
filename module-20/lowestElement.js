// lowest number using function in js

function lowestElement(number) {
    let lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < lowest) {
            lowest = element;
        };
    };
    return lowest;
};

const myArray = [10, 15, 9, 7, 12, 18, 75, 35, 88];
const lowestNumber = lowestElement(myArray);
console.log(lowestNumber);