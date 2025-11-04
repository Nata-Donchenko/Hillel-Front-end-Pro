// homeTask 5.3.
//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let num = prompt ('Enter some number')

for (let i = 1; i <= 100; i++) {
  if (num >= i * i) {
    console.log('for', i)
  }
}

let firsNumber = 1
while (num >= firsNumber * firsNumber) {
  console.log('while', firsNumber)
  firsNumber++

  if (firsNumber > 100) {
    break
  }
}