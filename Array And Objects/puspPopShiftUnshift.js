//push pop is faster than shift and unshift
//shift me pehle elements ko agy shift krta h then add krta h is liye slow

let fruits = ["Mango","Apple","Orange"];

//PUSH---> array k last me element ko add
fruits.push("Grapes","guava");
console.log(fruits);


//POP---> array k last se element ko remove
// console.log(fruits.pop());
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruit is :",poppedFruit);

//UNSHIFT--->array k start me element ko add
fruits.unshift("Guava","Berries");
console.log(fruits);


//UNSHIFT--->array k start se element ko remove
fruits.shift();
console.log(fruits);
let removedFruit = fruits.shift();
console.log("Removed fruit is:",removedFruit);