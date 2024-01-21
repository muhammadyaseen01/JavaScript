"use strict";

let fName = "   Yaseen    ";
let FName = "Yaseen";


// console.log(fName[5]);
console.log(fName.length);

console.log(fName[fName.length - 1]); // last char or string

//trim() it returns new string

console.log(fName);
console.log(fName.length);
// let newString = fName.trim();
// console.log(newString.length);
fName = fName.trim();
console.log(fName.length);


//uppercase
console.log(FName.toUpperCase());

//lowercase
console.log(FName.toLowerCase());


//slice

let newString = FName.slice(0,6); //after comma number not include
console.log(newString);

