///functions

//declaring a function
//first citizen

/// STEP 1

// function sum() {
//     let a = 10;
//     let b = 25;
//     console.log(a + b);
// }

// sum(); //function invocation
// console.log('calling sum function');
// sum();
// sum();
// sum();
// sum();

/// STEP 2

// function sum() {
//     let a = 11;
//     let b = 25;
//     return a + b;
// }

// sum(); //function cell
// console.log(13, sum());
// sum(); //sum() == 35
// let value = 10;
// let value_sum = sum();
// console.log(value_sum);
// console.log(value);

/// STEP 3

function sum (num1, num2){
    //num1, num2 --> params
    return num1 + num2;
}

console.log(45, sum(21, 10)); //args
let value_sum = sum(3, 6);
console.log(value_sum);

// while loop
let i = 0;
while (i <= 5) {
    console.log(i); //0 1 2 3 4 5
    i++; // i = i + 1
}

console.log('current i value', i);

// do while loop (block on do later checking while loop)
// first condition then while loop,,

let k = 6;

do {
    k++; // k = k + 1
    console.log(k); // 0 1 2 3 4 5
} while (k <= 9);

console.log('current k value', k);

// for loop

for (let i = 0; i<=5; i++) {
    console.log(i);
}

// if and else condition | else if condition,

// first if then ( else if looping will running for true or false condition)
// closing with else condition

let percentage = 90;

if (percentage >= 90) {
    console.log('Distinction');
} else if (percentage >= 70) {
    console.log('Good');
} else if (percentage >= 40) {
    console.log('Average');
} else {
    console.log('Fail')
}

// SWITCH METHOD

let day = 7
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
        
    default:
        console.log('please specify day between 1-7');
}

// create a customized calculator

// calculator ('reminder', 42, 8) // --> result = 2
// calculator ('add', 5, 8) // --> result = 13
// calculator ('sub', 8, 2) // --> result = 6
// calculator ('div', 32, 8) // --> result = 4
// calculator ('mul', 5, 8) // --> result = 40

function calculator (operation, num1, num2) {
    switch (operation){
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mul":
            return num1 * num2;
        case "div":
            return num1 / num2;
        case "rem":
            return num1 % num2;
        default:
            return 'please provide valid operation [mul,div,sub,add,rem]';
    }
}

const addResult = calculator ('add', 10, 35);
const subResult = calculator ('sub', 17681, 14672);
const remResult = calculator ('rem', 5489, 17 )
const errResult = calculator ('err', 18722, 14672);
console.log('result of add', addResult);
console.log('result of sub', subResult);
console.log('result of rem', remResult);
console.log('result of err', errResult);
