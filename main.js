// ДЗ 12.3. TODO лист
// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. 
// Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, 
// який дозволить видаляти завдання при кліку на них.

// Покроковий план:

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const body = document.querySelector('body')

const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

const title = document.createElement('h1')
title.textContent = 'My tasks'

const inputDiv = document.createElement('div')
inputDiv.classList.add('input-wrapper')

const list = document.createElement('ul')

container.append(title, inputDiv, list)

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Enter a task'

const addBtn = document.createElement('button')
addBtn.classList.add('addBtn')
addBtn.textContent = 'Add'

inputDiv.append(input, addBtn)


function addTask () {
  const taskText = input.value

  if (taskText === '') {
    return
  }

  const task = document.createElement('li')
  task.textContent = taskText

  const removeBtn = document.createElement('button')
  removeBtn.classList.add('removeBtn')
  removeBtn.textContent = 'Delete'

  list.appendChild(task)
  task.appendChild(removeBtn)

  input.value = ''
}

function removeTask (event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove()
  }
}

addBtn.addEventListener('click', addTask)
list.addEventListener('click', removeTask)