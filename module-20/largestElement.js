function largestElement(number) {
    let largest = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largest) {
            largest = element;
        };
    };
    return largest;
};


const myArray = [10, 15, 9, 7, 12, 18, 75, 35, 88];
const largeNumer = largestElement(myArray);
console.log("Learge Number is :", largeNumer);