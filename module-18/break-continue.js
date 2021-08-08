// var i=0;
// while (i<=20){
//     console.log(i);
//     if (i<10){
//         break;
//     }
//     i++;
// }

// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i> 10) {
//         break;
//     }
// }

var numbers =[10, 20, 30, 65, 40, 50, 60, 70, 80];

// for (var i=0; i<numbers.length; i++){
//     var number=numbers[i]
//     console.log(number);
//     if(number>60){
//         break;
//     }
// }

for (var i=0; i<numbers.length; i++){
    var number=numbers[i];
    if (number> 60){
        continue;
    }
    console.log(number);
}