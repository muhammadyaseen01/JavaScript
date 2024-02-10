// Sets(only iterable)-->set is iterable
//store data
//set also have it's own method
//No index based access
//Order is not gauranteed
//Unique items only

//SYNTAX:
const number = new Set([1,2,3,4,5,5]);//bracket me hamesha iterable hi likhnge
console.log(number);

const arr = [1,2,3];
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);//dobara add nh hoga duplicate
set.add(arr);
set.add(arr);//same array ko add nh krega (ek hi address ko point kr rha ye arr)
set.add([4,5,6]);
set.add([4,5,6]);//ye add ho gaye dobara dobara (waja qk dono array alag hain memory me alag address ko point kr rhy dono)
console.log(set.has(1));//check if the element is present in set or not (return True/False)
console.log(set);

const set1 = new Set("Yaseen");
console.log(set1);
//checking set is iterable

for (let item of set1){
    console.log(item);
}

//WHERE WE CAN USE SET: --> jab hamein unique elements ka array banana ho
// EG: userId

const myArray = [1,2,2,3,4,4,5,6,7,7,7];
const mySet = new Set(myArray);
console.log(mySet);
console.log(mySet.length); //undefined--> array like object nh (length property not working)
//how to find length themn?
// it is iterable so we can find length through for of loop
let length = 0;
for (let item of mySet){
    length++;
}
console.log(`There are ${length} different elements present in this set`);


