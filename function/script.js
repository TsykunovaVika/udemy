'use strict';

let num = 20;
function showFirstMessage(text){
    console.log(text);
   console.log(num);
}

showFirstMessage('hello world');
console.log(num);


// // function declaration
function calc(a,b){
    return (a + b);
}

console.log(calc(4,3));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// function expression
const logger = function(){
console.log('hello')
};

logger();

// стрелочные функции(es6)

const calc = (a, b) => {
    console.log('1');
    return a + b
};