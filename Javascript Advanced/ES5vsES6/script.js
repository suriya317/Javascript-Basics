const loggger = (params) => console.log(...params);

// var - gobal
// let - local script
// const - local script

let name = "Aditya";
if (true) {
  let name = "Suriya";
  console.log(name);
}
console.log("Outer scope", name);

// scope shadowing
if (true) {
  const age = 24;
  let value; //initialized
  const shadowValue = 90;
  console.log("outer", age); //24
  console.log("outer-value", value);
  console.log("shadow-outer", shadowValue); //90
  if (true) {
    const shadowValue = 56;
    value = 32; //declaration
    console.log("inner-value", value); //32
    console.log("inner", age); //22
    console.log("shadow-inner", shadowValue); //56
  }
  console.log("after shadow", shadowValue);
}

loggger("...............................");
console.log("before declaration", someFunc(10, 35)); //can be called before
// function declaration
function someFunc(a, b) {
  let value = a + b;
  return value;
}
console.log("normal function", someFunc(10, 15));

loggger("-------------------------------");

// function expression
// more than one line or {scope} defined, return keyword needed
// single line of return no return keyword need

// console.log('before arrow function', arrFunc(10, 15)); //can't be called before
const arrFunc = (a, b) => a + b;
console.log("arrow function", arrFunc(10, 15));

const personData = {
  name: "Murugan",
  batch: "FSD-Batch Morning",
  course: "MERN program",
  getPersonData() {
    console.log(this);
  },
  getPersonName() {
    console.log(this.name); //immediate parent object
  },
  arrowGetPersonName: () => {
    console.log(this.name); // in arrow function this always targets global scope
  },
};

personData.getPersonData();
personData.getPersonName();
personData.arrowGetPersonName();

console.log(
  "Hi, I'm",
  personData.name,
  "My Course is",
  personData.course,
  "and My Batch is",
  personData.batch
);

// template literal having JS values in a string

console.log(`
    Hi I'm ${personData.name}
    I'm studying ${personData.course}
    In guvi Batch ${personData.batch}
    `);

// spread and rest operator
const fruitsBasked = ["apple", "mango", "orange", "banana"];
// collection => ...(individual values) - spread
// individual values => ... [collection of items] - rest

function showAllFruits(fruit1, fruit2, ...remainingfruits) {
  console.log("fruit1", fruit1);
  console.log("fruits", remainingfruits); //rest
}

showAllFruits(...fruitsBasked); //"apple", "mango", "orange", "banana" //-spread

const baseStudents = {
  name: "baseStudentName",
  batch: "B11",
  course: "FSD",
  session: "WE",
};
console.log(baseStudents);
const newStudent = { ...baseStudents, name: "Suriya" };
console.log(newStudent);
loggger("......................");

// destructure
const nameArr = ["snega", "murugan", "boopathi", "samvel"];
const [, name2, name3] = nameArr; //destructure
console.log(nameArr);
// console.log('first name', name1);
console.log("second name", name2);
console.log("third name", name3);

const profile = {
  name: "suriya",
  company: "Edtech",
  location: "chennai",
  designation: "mentor",
  batches: ["FSD-WE", "FSD-WD"],
};

const { name: profileName, batches, designation, company } = profile;
console.log("designation", designation);
console.log("batched", batches);
console.log("Name", profileName);
console.log("Location", company);

function getcompanyName({ company }) {
  console.log("Company Name", company);
}
getcompanyName(profile);

// optional chaining

let profileArr = [
  {
    name: "suriya",
    company: "Edtech",
    location: "chennai",
    designation: "mentor",
    batches: ["FSD-WE", "FSD-WD"],
  },
  {
    name: "suriya",
    company: "Edtech",
    location: "chennai",
    designation: "mentor",
    batches: ["FSD-WE", "FSD-WD"],
  },
];

profileArr.map((profie, index) => {
  console.log(profie?.data); //optional chaining
});
