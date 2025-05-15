console.log("Hello, Lena!");

// объявили переменную и присвоили ей значение 6

// 7 примитивных типов
// Тип number
let x;  // объвить
x = 10; // присвоить значение = инициализация

console.log(x);

// нецелые числа тоже number 
let y = 12.5;
console.log(y);

x = 13;
x = y;
console.log(x);

// Тип string
x = 'Ten';
console.log(x);
let name = 'Alisher';

// Тип bigint для очень очень больших чисел
let z = 123123n;

// Тип undefined
let message;
console.log(message);

// Тип null
let secondName = null;

// Тип boolean
// true, false 
let isMale = true;

let isBigger = 10 > 4;
console.log(isBigger);

// константы 
const m = 12;
// m = 13; // ошибка!!! 

const COLOR_RED = "#F00";

// symbol
const symbol = Symbol("asd");
console.log(symbol);
// в качестве уникальных ключей

// Не примитив Object

const user = {
    "email": "khamidov@gmail.com"
};
console.log(user);
// Преобразование типов
// falsy values - те, которые преобразуются в false

// явное и неявное приведение типов

// Явное приведение
// 10 -> "10"
let ten = 10;
let tenAsString = String(ten);
console.log(tenAsString);
console.log(typeof ten);
console.log(typeof tenAsString);
console.log(typeof tenAsString === 'string');

// неявное преобразование к строке
let elewenAsString = 11 + '';  // '11'

// Приведение к числу
// '11' -> 11
let elewen = Number(elewenAsString);
console.log(elewen);
console.log(typeof elewen);

let wrongNumber = Number("fgdyfgydf");
console.log(wrongNumber);
console.log(typeof NaN);

if (x < Infinity ){
    console.log('Bla');
}
console.log(typeof Infinity);

console.log(Boolean("lena"));
console.log(Boolean("12"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));


const myMonyePoint =12;
const myBrotherPoint =0;

if (myMonyePoint){
    console.log('Im rich');
}

if (myBrotherPoint){
    console.log('Im rich');
}


let myUser = null;
if(myUser){
    console.log('User exists');
}

myUser = {email: "user@gmail.com"};

if(myUser){
    console.log('User exists');
}

// Шаблонные строки 
const myAge = 38;
const myName = "Lena";

//const text = "Меня зовут " + myName + "Мне " + myAge + " лет";
const text = `Меня зовут ${myName}. Мне ${myAge} год`;  // backticks - обратные кавычки
console.log(text);