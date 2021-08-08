const names = ['sabbir', 'zahedul', 'sujoy', 'sabbir', 'zahedul'];

// function removeDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const element = names[i];
//         console.log(element);
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }

//     }
//     return unique;

// }

// const newArray= removeDuplicate(names);
// console.log(newArray);

function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        console.log(element);

        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
        
    }
    return unique;
}

const newArray = removeDuplicate(names);
console.log(newArray);