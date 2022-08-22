"use strict";

let firstname = prompt('Введите Ваше имя');
while (firstname==="" || firstname===null) {
    firstname = prompt('Введите Ваше имя');
}
let lastname = prompt('Введите Вашу фамилию');
while (lastname==="" || lastname===null) {
    lastname = prompt('Введите Вашу фамилию');
}
let patronymic = prompt('Введите Ваше отчество');
while (patronymic==="" || patronymic===null) {
    patronymic = prompt('Введите Ваше отчество');
}
do {
    var age1 = prompt('Введите Ваш возраст');
    var age = parseInt(age1)
}
while(isNaN(age));

let gender = confirm('Ваш пол мужской?') ? 'мужской' : 'женский';
let pension = ((gender && age > 63) || (gender && age > 58))?"да":"нет";

alert(`Ваше ФИО: ${lastname} ${firstname} ${patronymic}\n
Ваш возраст в годах: ${age}\n
Ваш возраст в днях:  ${age * 365}\n 
Через 5 лет вам будет: ${age + 5}\n
Ваш пол: ${gender}\n
Вы на пенсии: ${pension}`)



