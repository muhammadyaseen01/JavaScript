const numbers = [1, 2, 3, 4, 5];

// SYNTAX:
// numbers.every(callback) -->callback and every both return boolean
//if every element return true in the callback then every method also return true o/w false

const ans = numbers.every(function (x) {
    return x > 0;
})
console.log(ans);
const res = numbers.every((x) => x % 2 == 0); //check all elements are even or not
console.log(res);

const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const output = array.every( arr => Array.isArray(arr));
console.log(output);

const products = [
    {id : 1, item1 : "Cricket Bat", price : 7000},
    {id : 2, item2 : "Batting Gloves", price : 4000},
    {id : 3, item3 : "Gloves", price : 5300},
    {id : 4, item4 : "Pad", price : 5950}
]

const result = products.every(x=>x.price < 6000); //sabke price 6000 se kam nh hain
console.log(result);