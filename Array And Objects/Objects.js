//Objects are reference type
//Arrays are good but not sufficient for 
//Real world data
//Objects stores key value pairs
//Objects don't have index

// key : value  ---->key is string by default
let obj = {
    name : "Muhammad Yaseen",
    "age" : 20,
    hobbies : ["cricket","sleeping","gaming"],
    activities : {
        sports : ["cricket", "football"],
    }
};console.log(obj);

// to access key value pair ye have to notations
// 1) dot
console.log(obj.name)
console.log(obj.age)
console.log(obj.hobbies[0])
console.log(obj.activities.sports[0]);
//2)bracket

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["name"]);