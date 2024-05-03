"use strict";
// Learning function
// Normal Function 
// Arrow Function 
function add(num1, num2) {
    return num1 + num2;
}
add(1, 43);
const addArrow = (num1, num2) => num1 + num2;
// Object --> Function --> Method
const richUser = {
    name: 'Sharmin',
    balance: 6000000,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
const arr = [3, 6, 7];
const newArr = arr.map((elem) => elem * elem);
console.log(newArr);
