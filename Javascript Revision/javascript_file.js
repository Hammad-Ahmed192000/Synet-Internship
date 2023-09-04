// // This is Challenge 1 i.e., Capitalize the first letter of a string
// let str = "hellworld";

// // I do str to first letter uppercase only

// let str1 = str.charAt(0).toUpperCase() + str.slice(1);
// //let str1 = str.charAt(0).toUpperCase() + str.substring(1);

// console.log(str1);


// // This is Challenge  i.e., Arithmatic operations on two random numbers and use template literals to console the output



// let x = Math.floor(Math.random() * 100 + 1);
// let y = Math.floor(Math.random() * 50 + 1);

// // make all the basic arithmetic operations with different variables as sumOutput, subOutput, mulOutput, divOutput, modOutput, expOutput
// // use template literals to console the output
// let sumOutput = `${x} +  ${y} = ${x + y}`;

// let subOutput = `${x} -  ${y} = ${x - y}`;

// let mulOutput = `${x} *  ${y} = ${x * y}`;

// let divOutput = `${x} /  ${y} = ${x / y}`;

// let modOutput = `${x} **  ${y} = ${x ** y}`;

// // let subOutput = x - y;
// // let mulOutput = x * y;
// // let divOutput = x / y;
// // let modOutput = x % y;

// // console all the above variables
// console.log(sumOutput);
// console.log(subOutput);
// console.log(mulOutput);
// console.log(divOutput);
// console.log(modOutput);

// // console.log(x)


        ///////////// JSON Intro //////////////////

// const post = {
//     id: 1,
//     title: 'Post One'
// }
// // JSON.stringify() method is used to convert a JavaScript object to a JSON string.
// const str = JSON.stringify(post);
// console.log(str);

// // JSON.parse() method is used to convert a JSON string to a JavaScript object.
// obj = JSON.parse(str);
// console.log(obj);


        /////////////// Object Challenge ///////////////

// Step1
const library = [
    {
        title: 'book1',
        author: 'author1',
        status:{
            own:true,
            reading:false,
            read:false
        }
    },  
    {
        title: 'book2',
        author: 'author2',
        status:{
            own:true,
            reading:false,
            read:false
        }
    },
    {
        title: 'book3',
        author: 'author3',
        status:{
            own:true,
            reading:false,
            read:false
        }
    }
]

// Step2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);


// Step3
// destructure the title of book1 and give it the name firstBook    
const {title:firstBook} = library[0];
console.log(firstBook);

// Step4
// make library object to a JSON string
const str = JSON.stringify(library);
console.log(str);