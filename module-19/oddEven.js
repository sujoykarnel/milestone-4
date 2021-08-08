function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber=1658;
const isMyNumberEven = isEven(myNumber);
console.log("My Number is Even.", isMyNumberEven);
