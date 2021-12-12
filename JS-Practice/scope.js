console.log("line number 1", varName);
var varName = 50;
console.log("line number 3", varName);
function fun() {
    console.log("line number 5", varName);
    console.log(varName);
    var varName = 100;
    console.log(varName);
}
fun();