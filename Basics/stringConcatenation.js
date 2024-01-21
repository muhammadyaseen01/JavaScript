"use strict";

let str1 = "Muhammad";
let str2 = "Yaseen";

let newString = str1 +" "+ str2;

console.log(newString);

let string1 = "23";
let string2 = "20";


//string ko number me convert krne k liye usse pehle + operator laga dete (+num)
// let new_string = string1 + string2; //string h abhi next me number me convert kia h
let new_string = +string1 + +string2;

console.log(new_string);
console.log(typeof new_string);