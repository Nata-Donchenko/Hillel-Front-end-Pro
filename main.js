
// Home task 8.2 Каррінг
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
//  Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function getMultiplication(x) {
  return function(y) {
    return x * y
  }
}

const result = getMultiplication(5)(2)
console.log(result)