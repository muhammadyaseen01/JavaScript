
const key_1 = "Email";
const key_2 = "Phone No";

const obj = {
    Name : "Muhammad Yaseen",
    Institute : "UBIT",
    Degree : "Computer Science",
    "Person Hobbies" : ["cricket", "football", "chess"] 
}
console.log(obj);
console.log(obj.Name);
// console.log(obj.Person Hobbies);   //dot operator se spaced word ko operate n kr sakte

console.log(obj["Person Hobbies"]); // issi liye bracket notation use krnge

// QUESTION : If i want to add key from variable and insert it in obj
//means----> key = "email" -->email has to be insert in obj

// obj.key = "value";// aise krne se key name ki key ban jayei lakin mujhe key me mojood value ko key banana h
//dot notation se nh ho sakta ye iske liye racket notation use

obj["key"] = "value"; // abhi bhi key add ho rha
//qk mene key ko as a string add krwaya h or key-value pair me key string hoti

obj[key_1] = "example@gmail.com";//key k andar jo value h wo add hogi ab
obj[key_2] = "0300-1234567";//key k andar jo value h wo add hogi ab
