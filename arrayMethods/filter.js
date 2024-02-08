//filter method kisi array me se elements ko filter krne k liye use hota h

// agar mere pas ek array h mixed numbers ka usme se mujhe even numbers filter krne hain to ye method use kr krnge

const numbers = [1,2,3,4,5,6,7,8,9];

const isEven = (number)=>{
    return number % 2 === 0;
}

const isOdd = (number)=>{
    return number % 2 !== 0;
}

const evenNumbers = numbers.filter(isEven) //filter k callback hamesha boolean return krna chahiye 
const oddNumbers = numbers.filter(isOdd)

console.log(evenNumbers);
console.log(oddNumbers);

// const multipleOfThree = numbers.filter(function (number){
//     return number % 3 === 0;
// });
// const multipleOfThree = numbers.filter(function func(number){
//     return number % 3 === 0;
// });
const multipleOfThree = numbers.filter((number)=> number % 3 === 0);
console.log(multipleOfThree);