// Home task 7.2
// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const someArray = ['a', 258, '90', {name: 'nata', id: 9}, true, 'b', 5, "2", false]

function filterNumbers (arr) {
  const result = []
  arr.forEach((el) => {
    if (typeof el === 'number' || typeof el === 'string') {
      if (!isNaN(+el)) {
        result.push(+el)
      }
    }
  })
  return result
}

function averageNum (arr) {
  const numbersArray = filterNumbers(arr)
  const sum = numbersArray.reduce((acc, el) => (acc + el) ,0)
  return sum / numbersArray.length
}

console.log(averageNum(someArray))