// // // This is Challenge 1 i.e., Capitalize the first letter of a string
// // let str = "hellworld";

// // // I do str to first letter uppercase only

// // let str1 = str.charAt(0).toUpperCase() + str.slice(1);
// // //let str1 = str.charAt(0).toUpperCase() + str.substring(1);

// // console.log(str1);


// // // This is Challenge  i.e., Arithmatic operations on two random numbers and use template literals to console the output



// // let x = Math.floor(Math.random() * 100 + 1);
// // let y = Math.floor(Math.random() * 50 + 1);

// // // make all the basic arithmetic operations with different variables as sumOutput, subOutput, mulOutput, divOutput, modOutput, expOutput
// // // use template literals to console the output
// // let sumOutput = `${x} +  ${y} = ${x + y}`;

// // let subOutput = `${x} -  ${y} = ${x - y}`;

// // let mulOutput = `${x} *  ${y} = ${x * y}`;

// // let divOutput = `${x} /  ${y} = ${x / y}`;

// // let modOutput = `${x} **  ${y} = ${x ** y}`;

// // // let subOutput = x - y;
// // // let mulOutput = x * y;
// // // let divOutput = x / y;
// // // let modOutput = x % y;

// // // console all the above variables
// // console.log(sumOutput);
// // console.log(subOutput);
// // console.log(mulOutput);
// // console.log(divOutput);
// // console.log(modOutput);

// // // console.log(x)


//         ///////////// JSON Intro //////////////////

// // const post = {
// //     id: 1,
// //     title: 'Post One'
// // }
// // // JSON.stringify() method is used to convert a JavaScript object to a JSON string.
// // const str = JSON.stringify(post);
// // console.log(str);

// // // JSON.parse() method is used to convert a JSON string to a JavaScript object.
// // obj = JSON.parse(str);
// // console.log(obj);


//         /////////////// Object Challenge ///////////////

// // Step1
// const library = [
//     {
//         title: 'book1',
//         author: 'author1',
//         status:{
//             own:true,
//             reading:false,
//             read:false
//         }
//     },  
//     {
//         title: 'book2',
//         author: 'author2',
//         status:{
//             own:true,
//             reading:false,
//             read:false
//         }
//     },
//     {
//         title: 'book3',
//         author: 'author3',
//         status:{
//             own:true,
//             reading:false,
//             read:false
//         }
//     }
// ]

// // Step2
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// console.log(library);


// // Step3
// // destructure the title of book1 and give it the name firstBook    
// const {title:firstBook} = library[0];
// console.log(firstBook);

// // Step4
// // make library object to a JSON string
// const str = JSON.stringify(library);
// console.log(str);



//         ///////////////// Function Challenge /////////////////

//         // Challenge 1
// function getCelsius(numInFarenhite){
//     return (numInFarenhite - 32) * 5/9;
// }

// console.log(getCelsius(32));

// // one line arrow function of the above one
//         // Challenge 2
// const getCelcius = (numInFarenhite) => (numInFarenhite - 32) * 5/9;

// console.log(`The Required Temperature is ${getCelcius(32)} \xB0C` );


//         // Challenge 3
//     ////////////////// minMax Challenge ////////////////

// // Solution 1
// // Using min and Max methods of Math object to find minimum and maximum and make their functions

// function minNum(arr){
//     const min = Math.min(...arr);
//     return min;
// }

// function maxNum(arr){
//     const max = Math.max(...arr);
//     return max;
// }

// console.log(`The minimum number is ${minNum([1,2,3,4,5])} and the maximum number is ${maxNum([1,2,3,4,5])}`);


// // Solution 2
// const numbers = [5,4,3,2,1];
// const min = Math.min(...numbers);
// const max = Math.max(...numbers);

// console.log(`The minimum number is ${min} and the maximum number is ${max}`);

// // Solution 3

// const minMax = (arr) => {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     return {
//         min,
//         max
//     };
// }

// console.log(minMax([1,2,31,4,5]));

//         // Challenge 4

// // create an IIFE to find the area of rectangle give there length and width in arguments of IIFE

// (function(length, width){
//     console.log(`The area of rectangle with a length of ${length} and a width of ${width} is ${length * width}`);
// })(10, 20);



//     ///////////// Calculator challenge ///////////////

// // create a function called calculator(num1, num2, operator) which takes three arguments (num1, num2, operater) and make it for all the basic arithmetic operations
// // calculator(5,6,'+'); like this all the operations are there

// function calculator(num1, num2, operator){
//     // make a switch case for all the operations
//     switch(operator){
//         case '+':
//             console.log(num1 + num2);
//             break;
//         case '-':
//             console.log(num1 - num2);
//             break;
//         case '*':
//             console.log(num1 * num2);
//             break;
//         case '/':
//             console.log(num1 / num2);
//             break;
//         case '%':
//             console.log(num1 % num2);
//             break;
//         // make a default case for invalid operator
//         default:
//             console.log('Invalid operator');            
//     }
// }

// calculator(5,6,'+');
// calculator(10,12,'-');
// calculator(20,5,'/');
// calculator(5,2,'*');
// calculator(10,2,'^');


// ////////////////// FizzBuzz Challenge ///////////////////

// for(let i = 0; i <= 100; i++)
// {
//     // if i is divisible by 3 print Fizz
//     if(i % 3 == 0){
//         console.log('Fizz');
//     }
//     // if i is divisible by 5 print Buzz    
//     else if(i % 5 == 0){
//         console.log('Buzz');
//     }
//     // if i is divisible by 3 and 5 print FizzBuzz
//     else if(i % 3 == 0 && i % 5 == 0){
//         console.log('FizzBuzz');
//     }
//     // if i is not divisible by 3 or 5 print i
//     else{
//         console.log(i);
//     }
// }


///////////////////// Array Methods Challenge //////////////////////
            // Challenge 1
const people = [
    {
        firstName: 'Hammad',
        lastName: 'Ahmed',
        email: 'hammad@gmail.com',
        phone: '03109182087',
        age: 25
    },
    {
        firstName: 'Brad',
        lastName: 'John',
        email: 'brad@gmail.com',
        phone: '03109182088',
        age: 19
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '03109182089',
        age: 60
    },
    {
        firstName: 'James',
        lastName: 'hilton',
        email: 'james@gmail.com',
        phone: '03109182090',
        age: 24
    },
    {
        firstName: 'Aima',
        lastName: 'Baig',
        email: 'aima@gmail.com',
        phone: '03109182091',
        age: 40
    }
];

// create a function called nameAndemail which returns an array of name and email of all the people that have age less than 25

// Solution 1
// const nameAndemail = () => {
    const nameAndEmail = people.filter(person => person.age <= 25)
    .map(person => `${person.firstName} ${person.lastName} - ${person.email}`);

// }

// Solution 2
const nameAndEmail2 = people.filter(person => person.age <= 25)
    .map(person => ({
        name: person.firstName + " " + person.lastName,
        email: person.email
    }));

console.log(nameAndEmail);




//////////// Positive Sum Challenge //////////////
            // Challenge 2 

const numbers = [20, -29, -22, 30, 50, -19];

// Create a function called positiveSum which returns the sum of only positive numbers from the numbers array
// Solution 1
const positiveSum = () => {
    const sum = numbers.filter(num => num > 0).reduce((prev, cur) => prev + cur, 0);
    return sum;
}

console.log(positiveSum());

//////////// Capitallized Words Challenge //////////////
            // Challenge 3
// Solution 1

const wordsArray = ['hello', 'world', 'how', 'are', 'you', 'today'];
// make all the words in the wordsArray capitalized and store them in a new array called capitalizedWordsArray
const capitalizedWords = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.substring(1));

console.log(capitalizedWords);

// Solution 2
const capitalizedWords2 = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// Also
const capitalizedWords3 = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length)); 
console.log(capitalizedWords3);

