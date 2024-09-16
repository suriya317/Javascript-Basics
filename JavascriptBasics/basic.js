//console.log('working');

//alert
//used to give msg to the user and blocks the next code
console.log('welcome to My World');
//alert('Are you approving?');
console.log('you approved');

//prompt
//used to get message as string from user and block the next line
let name = prompt('what is your name','student');
let work = prompt('Profile Designation?','Role')
console.log('welcome', name);
console.log('welcome', work);

//confirm
//used to get message as boolean from user and block the next line
let flag = confirm('Are you willing to buy the course');
console.log(flag);
if (flag == true) {
    console.log ('Thanks for buying the course');
} else {
    console.log('we regret to loose you.');
}

//variables
//variable types
//var is global scoped
var a = 3;
console.log(a);
var a = 7; //can re-declare
console.log(a);
a = 31; //can re initiate
console.log(a);

//let and const are blocked scoped
let b = 13;
console.log(b);
//let b = 17; //not possible to re-declare
b = 20; //re-initialization is possible
console.log(b);

const c = 25;
//const c = 15 //not possible to re-declare
// c = 18; // re-initialization is not possible


//variable - username, value = Suriya, datatype - string
let userName = 'Suriya'; //string
let userAge = 24; // number
let isMentor = true; //boolean - true, false
let userObj = { name: 'Suriya', age: 24, isMentor: true }; //object
let userArr = ['Suriya', 24, true]; // array [object]

console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isMentor, typeof isMentor);
console.log(userObj, typeof userObj);
console.log(userArr, typeof userArr);


///camel casing - JS
// var guviData

///elephant casing
// var GUVIDATA

///_casing - Python user will use it
// var guvi_data


//operators
// ARITHMETIC (Step 1)
console.log('arithmetic operators');
console.log('add ->', '31 + 31 =', 30 + 31);
console.log('sub ->', '31 - 31 =', 31 - 31);
console.log('mul ->', '31 * 31 =', 31 * 31);
console.log('div ->', '31 / 31 =', 63 / 31);
console.log('reminder ->', '31 % 31 =', 48 % 31);

// LOGICAL (Step 2)
console.log('logical operators')
let value_left = 15;
let value_right = 20;

console.log('equal to', '15 == 20', value_left == value_right);
console.log('not equal to', '15 != 20', value_left != value_right);
console.log(
    'and equal to',
    '15 = 15 and 20 = 20',
    value_left == 15 && value_right == 20
);
console.log(
    'and equal to',
    '15 = 15 and 20 = 10',
    value_left == 15 && value_right == 10
);
console.log(
    'any one equal to or || ->',
    '15 = 15 or 20 = 10',
    value_left == 15 || value_right == 10
);
console.log(
    'any one equal to or || ->',
    '15 = 20 or 20 = 10',
    value_left == 20 || value_right == 10
);