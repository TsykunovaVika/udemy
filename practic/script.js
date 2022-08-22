"use strict";
// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// let num = 5;

// while (num <= 10 ){
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while(num <= 10);

// for (let i = 5; i <= 10; i++) {
//     console.log(i)
// }

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл


// for (let num = 20; num >= 10; num--) {
// if (num === 13){
//     break;
// }
// console.log(num);
// }

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// for (let num = 2; num <= 10; num++){
//     if(num === 3){
//         continue;
//     }
//     if(num === 5){
//         continue;
//     }
//     if(num === 7){
//         continue;
//     }
//     if(num === 9){
//         continue;
//     }
//     console.log(num);
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }

