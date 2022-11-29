function generatePin() {
    return Math.floor(Math.random() * 90000) + 10000;
}
const notNan = !isNaN("10X");
//console.log(notNan)
const product = 5; const price = "7";
const subTotal = product * price;
const tax = subTotal / 10;
const total = subTotal + tax;
console.log(total)
