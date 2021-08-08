function isLeapYear(year){
    if (year%4 == 0){
        return true;
    } else {
        return false;
    };
};

const myYear=2020;
const isMyYearLeapYear=isLeapYear(myYear);
console.log("Is my leap year leap year.", isMyYearLeapYear);