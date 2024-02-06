

// function myFunc() {
//     function hello(){
//         console.log("hello World");
//     }
//     // return 1234;
//     return hello;
    
// }

// const ans = myFunc();
// ans();



function myFunc() {
    function hello(){
        return "hello world";
    }
    // return 1234;
    return hello;
    
}
const ans = myFunc();
console.log(ans());

function myFunc2() {
    return function(){
        return 1234
    }
    //OR
    // return function hello(){
    //     return 1234
    // }
    
}
const ans2 = myFunc2();
console.log(ans2());
