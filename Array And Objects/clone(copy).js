
let array1 = ["item1","item2","item3","item4"];
let array2 = array1
//clone ---> copy banani ho array ki
// 1) copy all array
let array3 = ["item1","item2","item3","item4"];
//2) slicing
let array4 = array1.slice(0);
//3) concat 
let array5 = [].concat(array1);


//NEW WAY -----> using SPREAD OPERATOR

let array6 = [...array1];


//new array banane k bad change kr rha hun array1 me clone walay me add nh ho rha
array1.push("item5");

console.log("printing");
console.log("array1 ==",array1);
console.log("array2 ==",array2);
console.log("array3 ==",array3);
console.log("array4 ==",array4);
console.log("array5 ==",array5);
console.log("array6 ==",array6);


console.log(array1 === array2); // agar dono array ek hi address ko point kr rhy hongy to true dega wrna false
console.log(array1 === array3); //qk aaray 3 copy kia h
console.log(array1 === array4); // clone bnaya h
console.log(array1 === array6); // clone bnaya h

//QUESTION: arr1 element arr2 me chahiye or ye elements bhi chahiye("for,while,ifElse")
let arr1 = ["item1","item2","item3"];
let arr2 = arr1.slice(0).concat(["for","while","ifElse"]);

console.log(arr2);

//QUESTION: make arr3 and copy arr1 and 2 and some more elements

let arr3 = [...arr1, ...arr2, "some", "more", "elements"];
console.log(arr3);

