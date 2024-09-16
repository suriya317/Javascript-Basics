// console.log (account_name);
// var account_name = 'suriya';
// console.log (account_name);
// var bank_name = 'SBI' ;
// console.log (bank_name);

sayMyName();
sayMyName();
let acc_name = 'suriya';
function sayMyName() {
let name = 'Aditya';
console.log('my name is', name);
}

// ARROW FUNCTION (it will execute in script)

var arw_fn = () => {
    let new_name = 'Suriya';
    console.log('Name -', new_name);
};
arw_fn();

// ANONYMOUS FUNCTION

let anon_func = function () {
    let new_name = 'Murugan';
    console.log('Name:', new_name);
};
anon_func();

// IIFE Function - (Immediately invoked function Express)

(function (parm) { 
    let value = 5;
    console.log('value:', value + parm);
}) (80);

//////////////////////////////////////////////////

function add_two_num (num1, num2) {
    return num1 + num2;
}
console.log(add_two_num(10, 15));

const arr_addtwo_func = (num1, num2) => num1 + num2;

console.log (arr_addtwo_func(10, 31));

// SCOPING

// 1. var - global scope
// 2. let and const block scope

if (true) {
    let abc = '15 value';
    console.log('in first scope', abc);
    if (true) {
        const bca = '25 value';
        console.log('in second scope', bca);
        if (true) {
            //scope shadow
            const bca = '35 value';
            console.log('in third scope', bca);
        }
    }
}

// JSON - Javascript Object Notation

const emp_obj = {
    name: 'Suriya',
    company: 'Elavarasi Groups',
    role: 'CEO',
    employees: ['Shadini', 'Boopathi'],
    work_hours: '9',
    location: {
        state: 'Tamilnadu',
        city: 'Vellore'
    },
    'years of experience': 2.5,
};

// Dot Notation

console.log(emp_obj);
console.log(emp_obj.name);
console.log(emp_obj.company);
console.log(emp_obj.role);
console.log(emp_obj.employees);
console.log(emp_obj.employees[0]);
console.log(emp_obj.location);
console.log(emp_obj.location.state);
console.log(emp_obj.location.city);

// Map Notation

console.log(emp_obj['years of experience']);
console.log(emp_obj['role'])