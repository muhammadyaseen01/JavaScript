// higher order function ---> a which take function as an argument or return a function is called higher order function

const radius = [3, 1, 6, 4, 9];
//calculate Area
const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
//Calculate Circumference
const calculateCircumference = function(radius){
    let output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));
//Calculate Diameter
const calculateDiameter = function(radius){
    let output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));
