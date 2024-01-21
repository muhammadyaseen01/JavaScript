//ARRAY : Ordered collection of items
//array is mutable
let fruits = ["Mango","Apple","Orange"];
console.log(fruits);
fruits[1] = "Grapes"; // it change the original array
console.log(fruits);

let numbers = [1,2,3,4];
console.log(numbers);

let mixed = [1,2,3.6,"string", null , undefined]
console.log(mixed);

// ARRAY is a reference types ---> object h

console.log(typeof fruits);

let obj = {};
console.log(typeof obj);

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));
