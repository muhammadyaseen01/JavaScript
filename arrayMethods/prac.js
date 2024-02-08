const users = [
    { firstName: "Muhammad", lastName: "Yaseen", age: 21 },
    { firstName: "Muhammad", lastName: "Naveed", age: 21 },
    { firstName: "Muhammad", lastName: "Muzammil", age: 23 },
    { firstName: "Muhammad", lastName: "Awais", age: 24 }
];

const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}); 

console.log(output);
