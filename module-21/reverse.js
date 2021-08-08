// const greetings = 'Hello How Are You?'

// function getReverse(text) {
//     let reverse = '';
//     for (const letter of text) {
//         reverse = letter + reverse
//     }
//     return reverse
// }

// const reversed = getReverse(greetings);
// console.log(reversed)

const greetings = 'Hello How Are You?'

function getReverse(text) {
    let reverse = '';
    for (let i=text.length; i>=0; i--) {
        reverse +=text[i];
    }
    return reverse
}

const reversed = getReverse(greetings);
console.log(reversed)
