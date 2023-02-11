"use strict";
/* const add = (a: number, b: number): number => a + b;

let result: number = add(5, 5);

//console.log(result);



const addWithOptionalTax = function (preco: number, quantidade: number, imposto?: number): number {
    let total = preco * quantidade;

    if (typeof imposto != 'undefined') total += total * imposto;

    return total;
}

//console.log(addWithOptionalTax(500, 200));
//console.log(addWithOptionalTax(500, 200, 0.14));

const applyDisccount = (price: number, quantity: number, tax?: number, discount?: number) => {
    let total = price * quantity;

    if (tax) {
        total = total + (total * tax);
    }



    if (discount && tax) {
        total = total + (total * tax) - (discount / 100);
        console.log("TOTAL: " + total);
    }

    return total;
}

console.log("SEM IMPOSTO ou DESCONTO: " + applyDisccount(1000, 1));
console.log("COM IMPOSTO SEM DESCONTO: " + applyDisccount(1000, 1, 0.14));
console.log("COM IMPOTO E DESCONTO: " + applyDisccount(1000, 1, 1, 14)); */
const applyDiscount3 = (price, quantity, tax, discount) => {
    let total = price * quantity;
    if (tax) {
        total += total * (tax / 100);
    }
    if (discount) {
        total -= total * (discount / 100);
    }
    return total;
};
let result = applyDiscount3(10, 2);
console.log(result); // Output: 20
result = applyDiscount3(10, 2, 10);
console.log(result); // Output: 22
result = applyDiscount3(10, 2, 10, 10);
console.log(result); // Output: 19.8
