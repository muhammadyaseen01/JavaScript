
const users = ["Yaseen","Awais","Muzammil","Naveed"];
console.log(users.sort()); //alphabetic order me sort kr rha h


const numbers = [4,26,8,3,21,75,345,23,0];
numbers.sort(); // ascii code k hisaab se sort kr rha is liye expected result nh mil rha h
console.log(numbers);
// console.log(numbers.sort());

function mySort(a,b){
    return a-b; //if ans +ve then swap otherwise skip
    // return b-a //sort in descending order
}

console.log(numbers.sort(mySort));

console.log(numbers.sort(function(a,b){
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    if(a==b){
        return 0;
    }

}));

const products = [
    {item1 : "Cricket Bat", price : 7000},
    {item1 : "Batting Gloves", price : 4000},
    {item1 : "Gloves", price : 5300},
    {item1 : "Pad", price : 5950}
]
//sort acc to price
console.log(products.sort((x,y)=> x.price-y.price));//ascending
console.log(products.sort((x,y)=> y.price-x.price));//descending