// Better Practices
// Naming conventions examples - use of show, get (in terms of its work)
// One function  --> One Action
// Func name should be descriptive


function login() {
    console.log('Anmol, Logged in successfully');
} // cannot use the same function for different user as username is hardcoded

login();


// reusable function
function login(username, password) {
    console.log(`${username}, logged in successfully`);
}

login('Anmol');
login('yash');
// If one parameter is not passed it sets itself as undefined

function upperCase(str) {
    console.log(str.toUpperCase());
}

upperCase('anmol');  //prints in uppercase - ANMOL


function calculateArea(width, height) {
    const area = width * height;   
    return area;
}

const area = calculateArea(40);
console.log(area);     //NaN (Not a number) -> As we have not passed height parameter
// 40 * undefined = NaN


function calculateArea(width, height = 1) {  // default parameter
    const area = width * height;   
    return area;
}

const area = calculateArea(40);
console.log(area);    // 40 * 1 = 40


// Scope 
function download () {
    const file = 'abc.pdf';
}
download(); //func invoke
console.log(file);  //gives error in console -> filename not defined as access not provided



// Callbacks
function formatText(text, formatCallback) {
    return typeof formatCallback === 'function' ? formatCallback(text) : text.toUpperCase();
}

const result = formatText('hello', function(text) {
    return text.charAt(0).toUpperCase + text.slice(1);
});

console.log(result);  //Hello



// IIFE (Immediately invoked func expression) 
(function setup() {
    console.log('Hey there, whatsupp?');
})();



// Arrow Functions
const login = (username, password) => {
    console.log('Logged In!');
}
login(); //func call


const sum = (num1, num2) => {
    return num1 + num2;
}

// Above func can also be written as -     
const sum = (num1, num2) => num1 + num2;


const result = sum(5, 5);
console.log(result);  //10