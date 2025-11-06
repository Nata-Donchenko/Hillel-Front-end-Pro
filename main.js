// homeTask 5.4.
// Дано ціле число (ввести через 'prompt'). 
// З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let num = prompt('Введіть число більше 1')
let isPrimeNum = true

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrimeNum = false
    break
  }
}

if (isPrimeNum === false) {
  console.log(`Число ${num} не є простим`)
} else {
  console.log(`Число ${num} є простим`)
}