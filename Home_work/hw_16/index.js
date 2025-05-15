//task- 1
function validate(str) {
  const result = /^[a-z]19\d{2}born$/;
  return result.test(str);
}
console.log("c1986born: ", validate("c1986born")); // true
console.log("b1988born: ", validate("b1988born")); // true
console.log("1986born: ", validate("1986born"));  // false
console.log("c1886born: ", validate("c1886born")); // false
console.log("c1986bor: ", validate("c1986bor"));  // false

//task- 2
const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
const updated =sentence.replace(/javascript/gi, "TypeScript");
console.log(updated);
