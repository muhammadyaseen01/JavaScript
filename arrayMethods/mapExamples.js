//MAP --> is used to transform the array into new array
// EG: doubled all the elements of the array, tripled all the elements of array 
// EG: array = [1,2,3,4]--->double = [2,4,6,8] ---> triple =[3,6,9,12]

const arr = [2, 5, 6, 3];

function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2); // write 2 for binary
}

const output = arr.map(double);
console.log(output);

const output1 = arr.map(triple);
console.log(output1);

const output2 = arr.map(binary);
console.log(output2);

//OR
const output3 = arr.map(function binary(x) {
    return x.toString(2); // write 2 for binary
});
console.log(output3);
//OR

const output4 = arr.map((x)=> x.toString(2)) //ek line hi hai func me or retern kregi lazmi h to return keyword likhne ki zarorart nh
console.log(output4);

