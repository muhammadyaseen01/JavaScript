
// const reference type k sath use krnge

const fruits = ["mango", "grapes", "apple"];
console.log(fruits)
fruits.push("guava");//push is liye hua qk stack me address h or array heap memory me hy ot fruits address ko point kr rha h address me koi change nh ho sakta agr const se initialized ho
console.log(fruits);

//FOR OF:

// for(let fruit of fruits){
//     console.log(fruit);
// }
const fruits2 = [];
for (let fruit of fruits){
    fruits2.push(fruit.toUpperCase());

}
console.log(fruits2);

//FOR IN:
const fruits3 = [];
for (let index in fruits){
    console.log(fruits[index].toUpperCase());
}
