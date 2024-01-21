

const key1= "key_1";
const key2= "key_2";


const value1 = "value_1";
const value2 = "value_2";

//to build:
// const obj = {
//     key_1 : value_1,
//     key_2 : value_2,
// }
//method #01
const object = {

}

object[key1] = value1
object[key2] = value2

console.log(object);

//Method#02
const obj = {
    [key1] : value1,
    [key2] : value2,
}

console.log(obj);