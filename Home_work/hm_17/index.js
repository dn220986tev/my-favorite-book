function formatString(input) {

const check= /(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})/;
const match = input.match(check);
  if (!match) {
    throw new Error("Строка не соответствует требуемому формату: '1333.132.123 00'");
  }
  return `${match[1]} ${match[2]}:${match[3]}-${match[4]}`;
}
const result = formatString("1333.132.123 00");
console.log(result);

//////
console.log("*****************");
console.log("Task-2");



const myPromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.5; // 50% шанс

    if (isSuccess) {
        resolve("Best day of my life");
    }
        reject(new Error("Something is off"));
0});

myPromise
    .then(result1 => {
        console.log("Успех:", result1);
    })
    .catch(error => {
        console.log("Ошибка:", error.message);
    });