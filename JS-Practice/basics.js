// To declare variables : var, let, const
// var is function scope whereas let  & const are block scope. 
let language = 'JavaScript';

console.log (language);
const secondsInMinute = 60;    // cannot assign another value later
var language = 'JavaScript';


//(Got as undefined in the console window in the case of var)
console.log(greeting);
var greeting = 'Hello';


//(Got error in the console window in the case of let)
console.log(greeting);
let greeting = 'Hello';


//JavaScript is a loosely typed language which means Koi bhi variable kisi bhi ek type se 
//associated nahi hota. You can change the forms. String can be again conversted to no or anything else.
//This is known as dynamic type.
let age = 25;
age = 'Twenty Five';
console.log(age);


// Datatypes

// 1. Primitive data types (single value, bool, nos, string)
// - Number 
//     - let age = 25;
//     - let temp = -25;
//     - let price = 50.50;
// - String
//     - let name = 'Rakesh'; (Can give single or double quotes any)
// - Boolean (T/F)
//     - let isLoggedIn = false;
// - Undefined - Absence of value, means nothing is assigned to a variable. (Jitne bhi variables hain define toh kara hai, par values pass nahi kari hain)
//     - let age;
// - BigInt (can use a number greater than max safe integer)
// - Symbol (Unique)
// 2. Structural Type
//   - Object (Like hashmaps - key (string,symbol), value pair)
//       - Function (callable)
//       - Arrays (collection of values)
//           - const numbers = [2, 5, 6, 'ABC, 'DEF', {name : 'Anmol' }];
//        - Maps  (key can also be an object)
//        - Sets (Unique values)
//        - Date
// 3. Structural Root
//   - null


// Operators 
// Ternary
const userRole = 'admin';
if(userRole === 'admin') {
console.log('You are an admin');
} else {
console.log('You are not an admin');

}       

// similar can be written as -
condition ? ' ' : ' ';

userRole === 'admin' ? console.log (' You are not an admin' ) : console.log( 'You are not an admin' );




// Operator Precedence 
// Docs : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table


console.log(3 > 2 && 2 > 1);      // true
console.log(3 > 2 > 1);   -->   console.log(true > 1)  --> false


// Arrays

const languages = [ 'javascript', 'python', 'c' ];

console.log(languages.length);
console.log(languages[1]);

languages.push('dart');        // adds at last
console.log(languages);

languages.unshift('java');     // adds at first
languages.pop();               // removes last element
languages.shift();  



// array with 3 objects
const actors = [
    {
        name : 'Actor 1',
        payment : 100
    },
    {
        name : 'Actor 2',
        payment : 200
    },
    {
        name : 'Actor 3',
        payment : 300
    }
];

// Loops

// for loop
for(let i = 0; i < actors.length; i++) {
    actors[i].payment = actors[i].payment - 10;
}

console.log(actors);

// for each loop
actors.forEach((actor) => {
    actor.payment = actor.payment - 10;
});

console.log(actor);

// for of loop
for(let actor of actors) {
    actor.payment = actor.payment - 10;
}

console.log(actor);
