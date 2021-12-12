console.log('Hello')

setTimeout(function() {
    console.log('I am async and I am back after 3 sec!')
}, 3000);   // runs after alloted milli second (3 sec)


//above can also be written as - 
function greeting() {
    console.log('I am async and I am back after 3 sec!')
}
setTimeout(greeting, 3000);


console.log('I am syncronous code')