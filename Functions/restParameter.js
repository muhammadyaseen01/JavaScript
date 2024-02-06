
function myFunc(a,b,c,...d){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is ${d}`);//aisi print krne par pata nh lag rha d array h 
    console.log(`d is `,d);//typeof d is obect (arrray ki type always ojbect ati)
    // agr me ye chaho k a b c me values anay k bad jitni vale parameter me reh jaye wo d me ajaye
}

myFunc(1,2,3,4,5,6);


//arguments me jitni values lenge unka sum krna h function banaye

function sumAll(...numbers){ //number ek array h or sari value array me ajayegi
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = sumAll(1,2,3,4,5,6,7,8,9,10);
console.log("the sum of all inputs is:",ans);
