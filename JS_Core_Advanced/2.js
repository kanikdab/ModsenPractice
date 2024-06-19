console.log(myVar); // undefined
var myVar = 'Hello, world!';
console.log(myVar); 

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 'Hello, world!';
console.log(myLet); 

console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 'Hello, world!';
console.log(myConst); 



