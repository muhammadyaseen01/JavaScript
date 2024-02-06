
//Block Scope: 
        // jo srf us scope me hi chalay jahan define hon
        //EXAMPLE: let and const keyword

// Function Scope:
        // javascript jab run hoti h to wo file as a function treat hoti h
        // is liye aisa variable jo js me kahin bhi use ho sakay
        //EXAMPLE: var keyword


// {
//     let var1 = "hello"; // this var1 can be used in this scope only
//     console.log(var1);
// }

// {
//     const var1 = 97;
//     console.log(var1);
// }
// {
//     var var1 = "function scope";

// }


// console.log(var1);


{
    var var1 = "hello";
    console.log(var1);
}

{
    var var1 = 97;
    console.log(var1);
}

var var1 = 22;
console.log(var1);
console.log("-------------------------------");

function myFunc(){
    if(true){
        let firstName = "Yaseen";
        console.log(firstName);
    }
    if(true){
        var firstName = "Muhammad";
        console.log(firstName);
    }
    console.log(firstName);
}

myFunc();