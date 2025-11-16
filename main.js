// Home task 7.3
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

const someArray = [1, 3, 4, 6, 2, 5, 7, 4]
console.log(someArray)

function removeElement (arr, item) {
  const result = arr.filter((el) => el !== item)
  return result
}

function removeEl (arr, item) {
  while (arr.indexOf(item) !== -1) {
    arr.splice(arr.indexOf(item), 1)
  }
  return arr
}

console.log(removeElement(someArray, 4))

console.log(removeEl(someArray, 4))