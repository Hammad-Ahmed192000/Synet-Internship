// This is Challenge 1 i.e., Capitalize the first letter of a string
let str = "hellworld";

// I do str to first letter uppercase only

let str1 = str.charAt(0).toUpperCase() + str.slice(1);
//let str1 = str.charAt(0).toUpperCase() + str.substring(1);

console.log(str1);


// This is Challenge  i.e., Arithmatic operations on two random numbers and use template literals to console the output



let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

// make all the basic arithmetic operations with different variables as sumOutput, subOutput, mulOutput, divOutput, modOutput, expOutput
// use template literals to console the output
let sumOutput = `${x} +  ${y} = ${x + y}`;

let subOutput = `${x} -  ${y} = ${x - y}`;

let mulOutput = `${x} *  ${y} = ${x * y}`;

let divOutput = `${x} /  ${y} = ${x / y}`;

let modOutput = `${x} **  ${y} = ${x ** y}`;

// let subOutput = x - y;
// let mulOutput = x * y;
// let divOutput = x / y;
// let modOutput = x % y;

// console all the above variables
console.log(sumOutput);
console.log(subOutput);
console.log(mulOutput);
console.log(divOutput);
console.log(modOutput);

// console.log(x)