// Array in React

const arr = ["san", "van", "can"];
const value = "san";
console.log(`index of ${value}`, arr.indexOf(value));

// push 0(1) loop
Array.prototype.customPush = function (value) {
  this[this.length] = value;
};
arr.push("sun", "pan");
arr.customPush("bun");
console.log("adding bun", arr);

// unshift
Array.prototype.customUnshift = function (value) {
  let newArr = [];
  newArr[0] = value;
  newArr.push(...this);
  this.length = 0;
  this.push(...newArr);
};
arr.customUnshift("gun");
console.log(arr);
