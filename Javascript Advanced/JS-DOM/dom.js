// console.log(document);

// Create an element in document

const ele = document.createElement("div");
console.log(ele);

// set attribute

ele.setAttribute("class", "dom");
ele.setAttribute("id", "main-div");
console.log(ele);
ele.innerText = "From JS";

// Task from sanjay sir
// 1. create an anchor tag with href and target attribute
const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.setAttribute("target", "_blank");
console.log(anchor);
anchor.innerText = "Google";

// Element by ID
const mainHead = document.getElementById("main-head");
console.log(mainHead);
const sideHead = document.getElementById("side-head");
console.log(sideHead);

// Element by Class
const gHead = document.getElementsByClassName("g-Head");
console.log(gHead); // result in array

// Generic selector

// query selector - selectes the first element of the selector

// ele=$ele, id=#$id, class=.$classname
// tag = document.querySelector('h1');
// class = document.querySelector('.ghead');
// id = document.querySelector("#main-head");
// if no element (null)
const queryTag = document.querySelector("h1");
console.log(queryTag);

// query selector all
// gets all data in an array

// ele=$ele, id=#$id, class=.$classname
// tag = document.querySelector('h1');
// class = document.querySelector('.ghead');
// id = document.querySelector("#main-head");
// if no element (empty array -> [])
const queryAllEle = document.querySelectorAll("h3");
console.log(queryAllEle);

// add changes to the element (accessing style attribute)
// queryTag.style.color = "red";
// queryTag.style.backgroundColor = "yellow";
// queryTag.style.fontSize = "45px";
// console.log(queryTag.style);

// 2. task style all h1 tag
// const h1_a = document.querySelectorAll("h1");
// queryTag.style.color = "green";

// h1_a.forEach((heading) => (heading.style.color = "blue"));

// trainer code,
function makeElementRed(ele) {
  const selectedEle = document.querySelectorAll(`${ele}`);
  for (let i = 0; i < selectedEle.length; i++) {
    selectedEle[i].style.color = "red";
  }
}
makeElementRed("h1");

const domDiv = document.querySelector("#dom-div");
// domDiv.innerText = "Hello, Hi There";
// domDiv.innerHTML = `<h1>Heading inside DOM</h1>`;
console.log(domDiv);

// Append and Append child property
// append multiple elements
// will not return any data
// const appendedData = domDiv.append(ele, anchor);
// console.log(appendedData);
// domDiv.append(ele, anchor);

// only append one element can be appended
// domDiv.appendChild(ele, anchor);
// document.body.append(ele);

// sample logic to get all id in the document (not needed);
// function getAllIdData(arrId) {
//   arrId.map((data) => {
//     let lookup = document.querySelectorAll(`#${data}`);
//     console.log(lookup);
//   });
// }
// const arrId = ["main-head", "side-head"];
// getAllIdData(arrId);

// ● Important Interview Questions,
// DOM is part of JS and why ?
// DOM given by browser to search a event for user interface
