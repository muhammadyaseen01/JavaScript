const products = [
    {id : 1, item1 : "Cricket Bat", price : 7000},
    {id : 2, item2 : "Batting Gloves", price : 4000},
    {id : 3, item3 : "Gloves", price : 5300},
    {id : 4, item4 : "Pad", price : 5950}
]

//find method callback function lega or us hisaab se find krke dega 
//func keh rha id 2 jiski h wo element retrun kro 
const ans = products.find(x=> x.id === 2);
console.log(ans);