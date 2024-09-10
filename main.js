'use strict';
//Задание 1 

let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

function EvenNumbers(a, b) {
    for (let i = a; i < b; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}
EvenNumbers(a, b);

//Задание 2

let i = 0;
while (i < 3) {
    alert(`number ${i}`);
    i++;
}

//Задание 3

let c = 0;

while (true) {
    c = +prompt('Введите число, больше 10');
    if (c < 10) break;
}

// 4 задание  

function min(e, d) {
    if (e < d) return e;
    return d;
}

alert(min(+prompt('Введите число e'), +prompt('Введите число d')));

// 5 задание 

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

// 6 задание 

ageUser = +prompt('Введите ваш возраст');

function checkAge(age) {
    return age >= 18 || confirm('Родители разрешили?');
}

alert(checkAge(ageUser));