
function addTwo(a,b) {
    return a + b;    
}

console.log(addTwo(2,5));

// agr me ek parameter pass krta hun to NaN dedega 
// second parameter ko by default "undefined" lelega
// is case ko manage krne k liye hamein if condition likhna parti h

function add(a,b){
    if (typeof b === "undefined"){ // b undefined nh hoga b ki type hogi undefined
        b = 0;
    }
    return a+b;
}

console.log(add(6));
console.log(add(6,7));


//by using default parameter
function addFunc(a,b=0){ // in new js after 2015
    return a+b;
}

console.log(addFunc(4));
console.log(addFunc(4,8));