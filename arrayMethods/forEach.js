//ForEach

//for each value or index leta parameter me 
// forEach(callback) -->foreach as a input callback leta h  

const array = [4,7,5,2];

function multiplyBy2(number,index,value){//number or index input leker number ko 2 se multiply
    console.log(`index is: ${index}`);
    console.log(`value is ${number}*2 = ${number*2}`);
}

multiplyBy2(array[0],0);
multiplyBy2(array[1],1);
multiplyBy2(array[2],2);
multiplyBy2(array[3],3);
multiplyBy2(array[4],4);

//BY FOR LOOP

for (let i = 0; i< array.length; i++){
    multiplyBy2(array[i],i)
}

//BY FOREACH LOOP:

array.forEach(multiplyBy2);

array.forEach(function myFunc(number,index){
    console.log(`index is ${index} and the multiplied value is ${number*3}`);
});

//EXAMPLE:
const users = [
    { firstname: "muhammad", age: 21 },
    { firstname: "Yaseen", age: 22 },
    { firstname: "Muzammil", age: 23 },
    { firstname: "Awais", age: 24 },
]
//for each
users.forEach(function func(user){
    console.log(user.firstname,user.age);
});

users.forEach((user) => {
    console.log(user.firstname,user.age);
});
//for of
for (let user of users){
    console.log(user.firstname,user.age);
}