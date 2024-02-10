//Iterables:
//Jispar hum for of loop laga saken
//EXAMPLE: string, array are iterable

//string is iterable because we can apply for of loop on string
const str = "Yaseen";
for (let item of str){
    console.log(item);
}

//array is also iterable
const arr = ["item1","item2","item3"];
for (let item of arr){
    console.log(item);
}

//let's try if obj is iterable or not
// const obj = {key1 : "value1", key2 : "value2"};
// for (let item of obj){
//     console.log(item);
//     //obj is not iterable
// }
//-------------------------------------------------//


//ARRAY LIKE OBJECT: which has the length property.(or jisko hum index se access kr sakte hain)
//string has the length property and can also be access through index

const myName = "Yaseen";
console.log(myName.length);
console.log(myName[3]);


