const form = document.getElementById("add-animal-form");
const nicknameInput = form.elements["nickname"];
const ageInput = form.elements["age"];
const breedInput = form.elements["breed"];

const animals = [];

function addAnimal(e) {
  e.preventDefault();

  //   console.log(nicknameInput.value);
  //   console.log(form.nickname.value);
  animals.push({
    nickname: nicknameInput.value,
    age: ageInput.value,
    breed: breedInput.value,
  });

  console.log(animals);
}

function rednerAnimals(animals) {
  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.classList.add("animal-card");
    
    const ageSpan = document.createElement("span");
    ageSpan.innerText = animal.age;

    const nicknameSpan = document.createElement("span");
    nicknameSpan.innerText = animal.nickname;

    const breedSpan = document.createElement("span");
    breedSpan.innerText = animal.breed;

  });
}

form.addEventListener("submit", addAnimal);
const animalsContainer = document.getElementById("animals-list");
function rednerAnimals(animals) {
  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.classList.add("animal-card");

    const ageSpan = document.createElement("span");
    ageSpan.innerText = animal.age;

    const nicknameSpan = document.createElement("span");
    nicknameSpan.innerText = animal.nickname;

    const breedSpan = document.createElement("span");
    breedSpan.innerText = animal.breed;

    li.append(ageSpan, nicknameSpan, breedSpan);

    animalsContainer.appendChild(li);
  });
}