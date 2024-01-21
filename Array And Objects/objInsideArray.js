
//OBJECT INSIDE ARRAY

let users = [
    {userId:1,firstName:"Muhammad",gender:"male"},
    {userId:2,firstName:"Yaseen",gender:"male"},
    {userId:3,firstName:"Muzammil",gender:"male"},
    {userId:4,firstName:"Awais",gender:"male"}
];

console.log(users);
console.log("-----------------");
for(let user of users){
    console.log(user);
}
console.log("-----------------");
for (let user of users){
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.gender);
}

