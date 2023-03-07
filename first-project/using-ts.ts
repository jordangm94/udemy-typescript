//Important note, the only reason things are highlighted as wrong here is because project recognizes same thing in using-ts.js file

const button = document.querySelector("button");
// Use exclamation and type casting to let typescript know that value will not be null and which element from HTML you will be targetting! 
const input1 = document.getElementById("num1")! as HTMLInputElement; //Adding an exclamation point tells Typescript that this value will never yield null, will always find an element.
const input2 = document.getElementById("num2")! as HTMLInputElement;

//Extra syntax, telling typescript what type each of the parameters/arguments will be! 
function add(num1: number, num2: number) {
  return num1 + num2;
}
//Need to add a + infront of input1.value and input2.value, this converts the values to numbers to align with typing requirements we stated in function
button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});