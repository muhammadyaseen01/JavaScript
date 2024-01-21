// function expression me se () se pehle wala function words remove kr k () k bad "=>" (arrow) laga denge


const happyBirthday = function(){
    console.log("happy birthday to you ......");
}

const happyBirthday1 = () => {
    console.log("happy birthday to you ...!!");
}

happyBirthday();
happyBirthday1();

//agar koi function me input argument one h srf to bracket k baghair bhi likh sakte 
//lakin agar 1 se ziada arguments hain to nh

// eg:
const isEven = number =>{
    return number % 2 === 0;
}
const isEven1 = (number) =>{
    return number % 2 === 0;
}

//aise bhi likh sakte hain agar ek line ka function ho to
//qk lazim h kch return krega is liye return bhi nh likhnge
const isEven2 = number => number % 2 === 0;

console.log(isEven(12));
console.log(isEven1(123));
console.log(isEven2(513));

const firstChar = string => string[0];

console.log(firstChar("yaseen"));