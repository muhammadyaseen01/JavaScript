// Q#01:
//you have an array of object given , you have to make new array to get first and last name using the given array

const array = [
    { firstName: "Muhammad", lastName: "Yaseen", age: 21 },
    { firstName: "Muhammad", lastName: "Naveed", age: 21 },
    { firstName: "Muhammad", lastName: "Muzammil", age: 23 },
    { firstName: "Muhammad", lastName: "Awais", age: 24 }
]
//x represet an object bcz object is an element of array
const newArray = array.map((x) => x.firstName + " " + x.lastName);
console.log(newArray);

// Q#02:
// same array but output me mujhe ek  array chaiye jis srf ek obj ho or wo no of persons bataye same ages k
// {21 : 2, 23 :1, 24:1}--->OUTPUT

const users = [
    { firstName: "Muhammad", lastName: "Yaseen", age: 21 },
    { firstName: "Muhammad", lastName: "Naveed", age: 21 },
    { firstName: "Muhammad", lastName: "Muzammil", age: 81 },
    { firstName: "Muhammad", lastName: "Awais", age: 76 }
]
//reduce is liye qk ek element me sumup krna pory array ko 
//is question me ek element = ek obj;
const output = users.reduce(function (acc, curr) {//acc={},curr=arr[0]-->1st obj of arr
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc
}, {}); //acc ko initially {} is liye dia qk return ek obj krna h to null obj initialize
console.log(output);


//add firstName of the users whose age is less than 30 in a new array
//WE CAN DONE THIS BY USING CHAINING
const output1 = users.filter(x => x.age<30).map(x => x.firstName);
console.log(output1);

//SAME QUESTION BY REDUCE METHOD

const output2 = 
users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc
},[])
console.log(output2);
