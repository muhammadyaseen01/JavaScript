const array1 = [1,2,3];
const array2 = [4,5,6];

console.log(array1,array2);

const newArray = [...array1, array2];
console.log(newArray);

const newArray1 = [..."abc"];//it work only on string
console.log(newArray1);

const newArray3 = [..."123456789"];
// const newArray4 = [...123456789];//it generate error
console.log(newArray3);
// console.log(newArray4);