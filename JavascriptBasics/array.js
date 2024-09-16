// const sampleArr = [10, 'suriya', true, {name: 'Elavarasi groups'}, ['STE']];

// const arr = [];
// console.log(arr, typeof arr);
// const arr2 = new Array();
// console.log(arr2, typeof arr2);

// Array Methods

const arr = [5, 4, 2, 6, 9, 1, 11];
arr.sort((a, b) => a - b); // ascending order
console.log(arr);
arr.reverse(); // descending order
console.log(arr);

// ----------------------------------------------------------

// push (it will added the value at end)

const arr_access = [1, 3, 5, 7, 9];
arr_access.push(10, 11, 12);
console.log('push', arr_access);

// pop (removed the value at end)

arr_access.pop();
console.log('pop', arr_access);

// unshift (added the value in beginning part)

arr_access.unshift(0);
console.log('unshift', arr_access);

// shift (removing the value in beginning part)

arr_access.shift();
console.log('shift', arr_access);

// slice (we able to get [this array (from 0 to before part)])

const sliced_arr = arr_access.slice(0, 2);
console.log('original arr', arr_access);
console.log('sliced_arr', sliced_arr);

// splice (able to get only before a array that we conditioned)

arr_access.splice(6, 7);
console.log('spliced original arr', arr_access);

// ----------------------------------------------------------

//copy by value

let a = 15;
let b = a;
b = 16;
console.log(b);
console.log(a);

// copy by reference

let some_arr_1 = [2, 3];
let some_arr_2 = some_arr_1; //new array
// if we wanted in copy by value -> let some_arr_2 = [...some_arr_1];
some_arr_2[0] = 9;
console.log(some_arr_1);
console.log(some_arr_2);

// ----------------------------------------------------------

// MRF (map, filter, reduce)

// 1. map

let mrf = [2, 4, 6, 8, 10];

let newMrf = mrf.map((val, ind, accArr) => {
    console.log('value : ', val);
    console.log('index : ', ind);
    console.log('accArr : ', accArr);
    return val - 2;
});
console.log('Map Result', newMrf);

// Sample task created by me

// let map_task = ['Jai', 'Priya', 'keerthana', 'riya', 'mia'];

// map_task.concat((v, i, pointArr) => {
//     console.log('value : ', v);
//     console.log('index : ', i);
//     console.log('accArr : ', pointArr);
//     return v + 'supersuriya'; // need to work here to sort
// })
// console.log(map_task);

// 2. filter

let fil_newMrf = newMrf.filter((val, ind, accArr) => {
    console.log('value : ', val);
    console.log('index : ', ind);
    console.log('accArr : ', accArr);
    return val != 4;
});
console.log('Filter Result:', fil_newMrf);

// reduce

let result = fil_newMrf.reduce((acc, val, ind, accArr) => {
    console.log('value : ', val);
    console.log('index : ', ind);
    console.log('accArr : ', accArr);
    return (acc += val);
}, 10);
console.log('Reduce Result', result);

// ----------------------------------------------------------

const performanceList = [64, 18, 82, 23, 54];
// add practical marks, 10 passed total;
// Chaining

const result_data = performanceList
   .map((val) => val + 10)
   .filter((val) => val >= 40)
   .reduce((acc, val) => {
    return (acc += val);
   }, 0);
   console.log(result_data);
// total failure or average mark of failure

const failure_result = performanceList
  .map((val) => val + 10)
  .filter((val) => val < 40)
  .reduce(
  (acc, val) => {
    total_failure = acc[0]++;
    acc[1] += val;
    acc[1] = acc[1] / acc[0];
    return acc;
  },
  [0, 0]
);
console.log('failure_result', failure_result);

const student_obj = {
    name: 'Suriya',
    getMyName() {
     console.log(this);
    },
};

student_obj.getMyName();

console.log(arr);

Array.prototype.zenMap = function (fn) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push (fn(this[i], i, this));
    }
    return temp;
};

const mapped = arr.map((val, index, acc_Arr) => {
    console.log(`
        Value : ${val}
        Index : ${index}
        Acctual Arr : ${acc_Arr}
        `);
        return val * 3;
})
console.log('mapped', mapped);

const zen_mapped = arr.zenMap((val, index, acc_Arr) => {
    console.log(`
        Value : ${val}
        Index : ${index}
        Acctual Arr : ${acc_Arr}
        `);
        return val * 3;
});
console.log('zen mapped', zen_mapped);