// Object
// key - value

const user = { email: "john@gmail.com" };
const age = 18;

// user = { email: "bob@gmail.com" }; // ошибка

// изменил значение свойства объекта
user.email = "john2@yahoo.org";

console.log(user);

// как добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);

// "hair color" - так делать не стоит
user["hair color"] = "yellow"; // box syntax

console.log(user);
const { "hair color": color } = user; // деструктуризация, если с пробелом

console.log(color);

// Пример того как можно создавать объект из переменных

const pandaName = "Po";
const favouriteFood = "bamboo";

const bobHeight =184;
const bob ={
    height: bobHeight,
}
console.log(bobHeight);

const key = "email";
const giraffeSam = {
  name: "Sam",
};
console.log(user.key);
const keys = ["name", "age"];
for (let i = 0; i < keys.length; i++) {
  giraffeSam[keys[i]];
}
const keys = ["name", "age"];
for (let i = 0; i < keys.length; i++) {
  console.log(giraffeSam[keys[i]]);;
}

// аналог того же самого это spread operator, но немного иначе

const personalInfo = {
    name: "Fedor",
  };
  
  const medicalInfo = {
    bloodType: 1,
  };
  
  const fedor = {
    ...personalInfo,  // скопировали поля из объекта personalInfo
    ...medicalInfo,   // скопировали поля из объекта medicalInfo
    age: 19,          // указали ручками ключ значение
  };
  
  console.log(fedor);