// SYNTAX
// .fill(value,start,end) //start and end is optional

const myArray = new Array(10).fill(0);
//new array banayega 10 length ka or usme 0 fill krdega har element ki jaga
console.log(myArray);

const array = [1,2,3,4,5,6,7,8,9];
//agr array k kch element ki value change krne h(EG: 3,4,5 ki jaga 0 krna h to)
console.log(array);

array.fill(0,2,6)//start include and end exclude therefore we write 6 (index no ki baat ho rhi h yahan)
console.log(array);
