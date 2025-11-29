// HomeTassk 11.2. Кнопка зміни кольору
//Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір

const body = document.querySelector('body')

const someText = document.createElement('p')
someText.textContent = 'Home task 11.2'
someText.classList.add('text')

const someButton = document.createElement('button')
someButton.textContent = 'Button'
someButton.classList.add('btn')

body.appendChild(someText)
body.appendChild(someButton)

function changeColor() {
  someButton.classList.toggle('btn-change-color')
  someText.classList.toggle('text-change-color')
}

someButton.addEventListener('click', changeColor)