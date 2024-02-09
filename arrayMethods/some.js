const numbers = [1, 2, 3, 4, 5];

// some ---> agr ek bhi element par bhi true hota callback to some bhi true return krega
const res = numbers.some(x => x % 2 === 0);
console.log(res);

const products = [
    { id: 1, item1: "Cricket Bat", price: 7000 },
    { id: 2, item2: "Batting Gloves", price: 4000 },
    { id: 3, item3: "Gloves", price: 5300 },
    { id: 4, item4: "Pad", price: 5950 }
]
//mene x consider kia h lakin meaningful name use krna behter h
const result = products.some(x => x.price < 6000);
console.log(result);