console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "Anmol";
console.log("varName", varName);
fun();
function fun() {
    console.log("Hello from function fun! :)");
}
fun();
funContainer();
var funContainer = function () {
    console.log("I am an Expression");
}
funContainer();



/* 
varName undefined
varName undefined
varName Anmol
Hello from function fun! :)
Hello from function fun! :)
error    
(If we remove error)
I am an expression.
*/

//At line 11, code execution will halt with error since funContainer variable has memory allocated but value(function expression) 
//is not assigned yet. So line 15 will not even get chance for execution unless error is corrected
//Once error is corrected line 15 will give output of  'I am expression'