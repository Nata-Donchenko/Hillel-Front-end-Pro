// Home task 7.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

const phrase = prompt('Enter a phrase')
const letters = prompt('Enter the letters, which you want to delete')

// функція, щоб перевести строку у масив
function createArray(str) {
  return str.split('')
}

// функція, щоб прибрати елементи масиву, що є пробілом.
// Для того, якщо користувач введе дві або більше літер через пробіл, щоб основна функція 
// їх не прибирала із основної фрази і в результаті пробіли залишились
function removeSpaces(arr) {
  const result = []
  arr.filter((el) => { // філтруємо масив
    if (el !== ' ') {
      result.push(el.toLowerCase()) // якщо елемент не дорівнює пробілу, то додаємо його у масив у нижньому регістрі, що б можна було видаляти як великі так і маленькі літери
    }
  })
  return result
}

// основна функція по дз, видаляти можна скільки завгодно літер
function removeLetters (promptPhrase, promptLetters) { // передаємо два параметри
const phraseArray = createArray(promptPhrase) // переводимо основну фразу у массив щоб можна було його перебирати
console.log(phraseArray)
const lettersArray = removeSpaces(createArray(promptLetters)) // переводимо задані літери у масив та прибираємо пробіли
console.log(lettersArray)
const result = phraseArray.filter((el) => !lettersArray.includes(el.toLowerCase())) // перебираємо і фільтруємо масив з фразою на предмет того, що залишаються ті літери, які не містяться у масиві із заданими літерами. Перевірку робимо у нижньому регістрі, що дозволить приьирати і великі і маленькі літери
return result.join('') // переводимо масив у строку
}

console.log(removeLetters(phrase, letters))