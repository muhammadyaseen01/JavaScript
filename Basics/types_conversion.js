"use strict";

//DATA TYPES: (premitive data types)
//number
//null
//string
//symbol
// Bingint
// Boolean
//undefined

let num = 97;
let str = "yaseen";

//Type of variable:

console.log(typeof str);
console.log(typeof (str));

//convert number to string

//1ST method (jugari)
num = num + ""; // + "" --> change the number into string
console.log(typeof num );

//2ND method 
console.log("-------------------------");
let num1 = 88;
num1 = String(num1); // converting into string
console.log(typeof num1);
console.log("-------------------------");

// console.log(typeof(num + "")); //string

//convert string to number

//1ST method (jugari)
let myStr = +"yaseen"; // string se pehle + laga denge to number me convert
console.log(typeof myStr);

//2ND method 
console.log("-------------------------");
let str1 = "88";
str1 = Number(str1); // converting into number
console.log(typeof str1);
console.log("-------------------------");