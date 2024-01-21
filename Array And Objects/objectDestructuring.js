
let band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year : 1974,
    singer : "Unknown"
};
// const bandName = band.bandName;
// const variable1 = band.bandName;
// const famousSong = band.famousSong;

// console.log(variable1, famousSong);


// DESTRUCTURING:
// let {keyname likhna zarori h yahan wrna error dega, another keyname etc}
//agr apne marzi k name k var me store krna h to kia krnge
// keyname:variable name

// by default keyName k hi variable bante

// let {var1, famousSong,} = band;//give error
//IF I WANT TO STORE VALUE IN VAR1 AND VAR2 
let{bandName:var1,famousSong:var2} = band;

console.log("-------------");
console.log(var1, var2);

console.log("----------------------------------");

let {bandName:variable1,famousSong:variable2,...restpros} = band;

console.log(variable1,variable2);
console.log(restpros);
console.log("----------------------------------");
//TO MAKE KA NEW OBJECT:
let{...newObj} = band;
console.log(newObj);