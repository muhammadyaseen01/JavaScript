const radius = [3, 1, 6, 4, 9];

//Area
const Area = function (radius){
    return Math.PI*radius*radius;
}
//Circumference
const Circumference = function(radius){
    return 2*Math.PI*radius;
}
//Diameter
const Diameter = function(radius){
    return 2*radius;
}

const calculate = function (radius,logic){
    let output = [];
    for (let i = 0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,Area));
console.log(calculate(radius,Circumference));
console.log(calculate(radius,Diameter));

