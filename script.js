/*
Задание:
    Пользователь заходит на сайт и вводит своё имя, возрост
    Вывести примеры для пользователя через окно ввода 
    на сложение, вычитание, умножение, деление и деление с остатком
    при этом они должны записываться в консоль разработчика 
    когда пользователь решил все примеры ему показывается сообщение чтобы он зашел в консоль
    и в консоле должны быть написаны все примеры с правельным ответом и ответом пользователя 
    например: 6 + 3 = 9 (Ваш ответ 9) 
 */

 var name = prompt("Введите свое имя");

 var age = +prompt("Введите возраст");

 console.log(name);

 console.log(age);


 var task1 = +prompt("Решите пример: 45+98");

 var task2 = +prompt("Решите пример: 92-54");

 var task3 = +prompt("Решите пример: 14*4");

 var task4 = +prompt("Решите пример: 98/2");
 
 var task5 = +prompt("Решите пример: 20%6");

 alert("Готово! Жми f12 и открой консоль");

 console.log("Ну, пора подвести итоги, " + name);

var answ1 = 143;
var answ2 = 38;
var answ3 = 56;
var answ4 = 49;
var answ5 = 2;

console.log("Пример 1 : 45+98=" + answ1 + ". Ваш ответ : "  + task1);
console.log("Пример 2 : 92-54=" + answ2 + ". Ваш ответ : "  + task2);
console.log("Пример 3 : 14*4=" + answ3 + ". Ваш ответ : "  + task3);
console.log("Пример 4 : 98/2=" + answ4 + ". Ваш ответ : "  + task4);
console.log("Пример 5 : 20%6=" + answ5 + ". Ваш ответ : "  + task5);


var mistake1 = 0;
var mistake2 = 0;
var mistake3 = 0;
var mistake4 = 0;
var mistake5 = 0;

if (answ1 == task1) {
    mistake1 = 0;
} else {
    mistake1 += 1;
}

if (answ2 == task2) {
    mistake2 = 0;
} else {
    mistake2 += 1;
}

if (answ3 == task3) {
    mistake3 = 0;
} else {
    mistake3 += 1;
}

if (answ4 == task4) {
    mistake4 = 0;
} else {
    mistake4 += 1;
}

if (answ5 == task5) {
    mistake5 = 0;
} else {
    mistake5 += 1;
}

var mistakes = mistake1 + mistake2 + mistake3 + mistake4 + mistake5;


console.log("Количество ошибок : " + mistakes);

if (mistakes <= 2) {
    console.log("Молодец! Так держать");
} else {
    console.log("Учи математику, дружище!");
}
