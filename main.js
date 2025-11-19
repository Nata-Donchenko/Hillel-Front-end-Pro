
// Home task 7.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

const phrase = prompt('Enter a phrase')
const letters = prompt('Enter the letters, which you want to delete')

function createArray(str) {
  return str.split('')
}

function removeSpaces(arr) {
  const result = arr.reduce((acc,  el) => { 
    if (el !== ' ') {
      acc.push(el.toLowerCase()) 
    }
    return acc
  }, [])
  return result
}

function removeLetters (promptPhrase, promptLetters) { 
const phraseArray = createArray(promptPhrase) 
const lettersArray = removeSpaces(createArray(promptLetters)) 
const result = phraseArray.filter((el) => !lettersArray.includes(el.toLowerCase())) 
return result.join('') 
}

console.log(removeLetters(phrase, letters))