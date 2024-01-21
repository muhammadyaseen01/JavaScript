
//How to iterate Object:
// 1) For in Loop
// 2) oject.keys

const obj = {
    Name : "Muhammad Yaseen",
    Institute : "UBIT",
    Degree : "Computer Science",
    "Person Hobbies" : ["cricket", "football", "chess"] 
}

// Method #01 :

// for (let key in obj){
//     console.log(key); //all key print
//     console.log(obj.key)//undefined-->qk oj me koi key name ka var nh h
//     console.log(obj["key"])//same as above concept
//     console.log(obj[key]);
// }

// for (let key_1 in obj){
//     console.log(`${key_1} : ${obj[key_1]}`);
// }
// for (let key_2 in obj){
//     console.log(key_2,obj[key_2]);
//     console.log(key_2,":",obj[key_2]);
// }

//Method#02:
 
console.log(Object.keys(obj));//returns and array

console.log(Array.isArray(Object.keys(obj)));

for(let i of Object.keys(obj)){
    console.log(i,":",obj[i]);
    // console.log(obj[i]);
}
