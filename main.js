
// Home task 8.1 Замикання
// Написати функцію, яка приймає 1 параметр. 
// Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function getTotalSum() {
  let totalSum = 0

  function getSum(x) {
    totalSum += x
    return totalSum
  }

  return getSum
}

const sum = getTotalSum()

console.log(sum(4))
console.log(sum(6))
console.log(sum(10))
console.log(sum(7))