// Home task 6.2
// Маєте масив чисел. 
// Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

let numArray = [2, 5, 456, 84, 4, 7, 539, 79, 32]
let numPairedArray = numArray.filter((num) => num % 2 === 0) 

console.log(numPairedArray)