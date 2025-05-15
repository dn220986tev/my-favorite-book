const form = document.getElementById("personal-data-form");
const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];

function onSubmit(e) {
  e.preventDefault();
  console.log(heightInput.value, genderInput.value);
}

function getIdealWeightByHeightForGender(){
    
    
}

form.addEventListener("submit", onSubmit);