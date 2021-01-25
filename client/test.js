something = [
    {
        brand:"Gucci",
        price:999,
        location:"Paris",
    }
]

console.log(typeof something[0].brand)

console.log(typeof something[0].price)
var test = something[0];
delete test.brand;
console.log(test);
console.log(something[0])
console.log(something)

