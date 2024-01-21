
let users = [
    {userId:1,firstName:"Muhammad",gender:"male"},
    {userId:2,firstName:"Yaseen",gender:"male"},
    {userId:3,firstName:"Muzammil",gender:"male"},
    {userId:4,firstName:"Awais",gender:"male"}
];

//DESTRUCTURING AGR ARRAY KI KRNA TO LEFT SIDE ARRAY USE , AGR OBJ KI KRNA TO RIGHT SIDE OBJ USE
//AGR ARRAY ME OBJ H USME SE KISI ITEM KO DESTRUCTUTRE KRNA H TO ARRAY K ANDR {} USE

const [user1,user2,user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);

console.log("------------------------");
//I NEED 1ST USER ID,2ND USER NAME ,fourth GENDER
const [{userId},{firstName:Name}, , {gender}] = users;
//thirsd ko skip krna tha is liye space left krdi

console.log(userId);
console.log(Name);
console.log(gender);