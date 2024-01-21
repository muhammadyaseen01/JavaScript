
let myArray = ["value1", "value2", "value3"];
//array destructuring ---> har element ko variable me dalna array se
//NORMAL way:
// let ele1 = myArray[0];
// let ele2 = myArray[1];
// let ele3 = myArray[2];
// let ele4 = myArray[3];

// console.log(ele1);
// console.log(ele2);
// console.log(ele3);
// console.log(ele4);

let [ele1,ele2,ele3,ele4] = myArray;
console.log(ele1);
console.log(ele2);
console.log(ele3);
console.log(ele4);

//QUESTION:
//if we want to store 1st and third element of array in variable ?
let [element1, ,element2] = myArray;//jis element ko store nh krna uske liye khali space choor denge
console.log(element1);
console.log(element2);
// console.log(element3);

// QUESTION:
//if we want to make variable of only two starting element of array and store rest of all in the another array
let myArray2 = ["val1","val2","val3","val4","val5"];

console.log("------------------");
//FIRST(1ST) METHOD:
let [elem1,elem2] = myArray2;
let myNewArray = myArray2.slice(2);
console.log(myNewArray);
console.log("------------------");
//SECOND (2ND) METHOD*:
let [item1,item2,...myNewArray2] = myArray2;
//ye item1 and 2 me start k 2 item store krega or baqi k saray items myNewArray2 me krdega naya array bana kr
console.log(item1);
console.log(item2);
console.log(myNewArray2);