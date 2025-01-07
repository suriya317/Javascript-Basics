//event building and propagation
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const c_counter = document.getElementById("counter");

let counterFn = outeFunction(); //innerFunction = outeFunction
parent.addEventListener("click", () => {
  alert("parent clicked");
});
//event building
child.addEventListener("click", () => {
  //stopping the propagation effects
  event.stopPropagation();
  //alert("child clicked");
  counterFn();
});

//closures
function outeFunction() {
  let count = 0;
  return function innerFunction() {
    count++; //1
    c_counter.innerText = count;
  };
}

//curring(JS)
//outeFunction() outeFunction() = innerFunction
outeFunction()(); //outeFunction()() = innerFunction()
//sum(3)(5)(6)() - Task

function sum(num1) {
  return function (num2) {
    if (num2) return sum(num1 + num2);
    return num1;
  };
}
console.log(sum(1)(2)(5)(6)());

function createButtonVariants(style) {
  return function (color) {
    if (!color) {
      color = "blue";
    }
    return function (text) {
      const button = document.createElement("button");
      button.className = style;
      button.style.backgroundColor = color;
      button.innerText = text;
      return button;
    };
  };
}
let dangerLarge = createButtonVariants("large")("crimson")("Delete");
let dangerSmall = createButtonVariants("small")("crimson")("Delete");
let acceptSmall = createButtonVariants("small")("teal")("account");
let acceptLarge = createButtonVariants("large")("teal")("account");
let deafultLarge = createButtonVariants("large")("")("account");
document.body.appendChild(dangerLarge);
document.body.appendChild(dangerSmall);
document.body.appendChild(acceptSmall);
document.body.appendChild(acceptLarge);
document.body.appendChild(deafultLarge);

// function createsbutton(style) {
//   return function (size) {
//     return function (text) {

//     };
//   };
// }
// createsbutton("large")();

// let largeButton = createsbutton(style)("submit");
// let smallButton = createsbutton(style)("submit");
// let mediumButton = createsbutton(style)("submit");
// document.appendChild(largeButton);
