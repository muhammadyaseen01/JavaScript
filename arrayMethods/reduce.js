// reduce ---> where you take all elements of array and come up with a single value
//reduce function "2" arguments leta h "pehla function dosra initial value"

//reduce k parameter me jo function use krte hain us function k parameter me (1st->accumulator hota and 2nd current value)
//ACCUMULATOR --> initial value given krte hum (in most cases 0 rkhte)
//CURRENT VALUE --> ye us array k har element pr iterate krti h

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//QUESTION 01: findSum
function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(findSum(array));


//reduce method take 2 arguments 1st is function and 2nd is initial value
//initial value is the initial value of accumulator
const output = array.reduce((acc, curr) => { //accumulator,current value
    acc = acc + curr;
    return acc;
},0);

console.log(output);


//QUESTION 02: findMax

function findMax(array){
    let max = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    return max;
}

console.log(findMax(array));

const output2 = array.reduce(function(max, curr){ // max is acts as accumulator
    //max zero set kia hua h or cuur har element ko iterate krega to direct cond apply
    if(curr > max){
        max = curr;
    }
    return max
},0);

console.log(output2);
