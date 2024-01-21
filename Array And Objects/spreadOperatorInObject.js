const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
    // key3: "valueUpdated" // key3 repeat hua h to usko overwrite krdega
    //object me same name ki key repeat nh hoti
}

console.log(obj1);
console.log(obj2);

// spread operator ki madad se obj me insertion
const newObj = {...obj1,...obj2}
console.log(newObj);

//agr spread operator se do obj add kiye mene isme or dono obj me same name ki key ho to newObj2 me overwritten hojayegi wo ---> jo key last me insert hogi same name ki wo add hogi isme

const obj3 = {
    key1: "valueUpdated"
}
console.log("--------------------");
const newObj2 = {...obj1,...obj3}
console.log(newObj2);// obj3 wala overwritten hoga qk last wala wala overwritten hoga
const newObj4 = {...obj3,...obj1, keyNew: "newValueInserted"}
console.log(newObj4);

const newObject = {..."abc"}; //key ko index bana dega key=0,value=a
console.log(newObject);

const newObject1 = {...["item1","item2"]}//agar key nh denge to index number ko key suppose krlega
console.log(newObject1);