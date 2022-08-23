"use strict";

function first() {
    setTimeout(function(){
        console.log(1);
    }, 500);
}


function scecond(){
    console.log(2);
}

first();
scecond();

function leatnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
leatnJS('JavaScript', function(){
    console.log('Я прошёл это урок')
})