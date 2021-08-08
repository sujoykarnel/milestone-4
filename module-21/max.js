function findBigNumber (number){
    let max=number[0];
    for (let i = 0; i< number.length; i++){
        let findAll = number[i];
        if(findAll> max){
            max=findAll;
        }
    }
    return max;
};

var total = findBigNumber([12, 34, 45, 32, 1]);
console.log('this is maximun number', total);