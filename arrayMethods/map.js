//MAP
const numbers = [3,4,5,7,8,6,1];

const square = function(number){
    return number*number;
    // console.log(number*number); ---> ye krnga to undefined ka array ban jayega
}
//new array banayega to issi liye naya variable me store krlnge
const squaredNumber = numbers.map(square);//it make a new array of returned element, agr function kch return nh krega to to jitni bar function chalega(array k jitne elements itna chalega) agr return nh kr rha function kch to undefined ka array ban jayega naya

console.log(squaredNumber);

//parameter me bhi function bana sakte

const cube = numbers.map(function(number){
    return number*number*number;
});
console.log(cube);

const quad = numbers.map((number,index)=>{//index bhi use kr sakte
    return `the index of the number is ${index} and the ${number}^4 is ${number*number*number*number}`;
});
console.log(quad);

const users = [
    { firstname: "muhammad", age: 21 },
    { firstname: "Yaseen", age: 22 },
    { firstname: "Muzammil", age: 23 },
    { firstname: "Awais", age: 24 },
];

const userNames = users.map(user=>{
    return user.firstname
})

console.log(userNames);

