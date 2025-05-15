const word ="1998-hjklw:John";
const notDigit = /[^0-9]/
// если символ должен быть хотя бы один раз представлен, но может быть и больше
// + значит (1 или много)
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/;
console.log(regex4.test("Al Key")); // true
console.log(regex4.test("A Key")); // false

// символы, которые обозначают количество называются кванторами

// с помощью знака ? мы можем обозначать опциональный элемент (0 или 1 вхождение)
// вопрос ставится справа от нужного символа
const cameraModel = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";
const cameraModel4 = "Canon 1200RD"; // NOOO!!!
// сделаем выражение, которо бы подошло под оба варианта
const regex5 = /Canon \d\d?RD?/;

console.log(regex5.test(cameraModel));
console.log(regex5.test(cameraModel2));
console.log(regex5.test(cameraModel3));
console.log(regex5.test(cameraModel4));

// * значит неопределенное количество вхождений - (0 или более)

const regex6 = /\d*/; // 1   12  15 - ok  "1h" - не подойдет

const fullNameReg = /[A-Z][a-z]+\s[A-Z][a-z]+/;

const phoneNumber = "0151 52466512";

// +49 (151) 524 665 12

const phoneRegex = /0(\d{3})\s(\d{3})(\d{3})(\d{2})/;

