//parameter Destructuring


const obj = {
    firstName : "Muhammad",
    lastName : "Yaseen",
    gender : "Male"
}

function details(obj){
    console.log(obj.firstName);
    console.log(obj.lastName);
    console.log(obj.gender);
    console.log(obj.age);
}

details(obj);
console.log("----------------");
function destructure({firstName:name,lastName,gender,age}){
    console.log(name);
    console.log(lastName);
    console.log(gender);
    console.log(age);
}

destructure(obj);