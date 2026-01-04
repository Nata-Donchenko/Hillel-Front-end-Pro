import { list, input} from './dom.js'
import { saveTasks } from './storage.js'

export function createTask(taskText, completed = false) {
  
  const task = document.createElement('li')

  const checkComplete = document.createElement('input')
  checkComplete.type = 'checkbox'
  checkComplete.checked = completed

  const text = document.createElement('span')
  text.textContent = taskText
  if (completed) {
    text.classList.add('complete')
    task.classList.add('task-complete')
  }

  checkComplete.addEventListener('change', () => {
    text.classList.toggle('complete')
    task.classList.toggle('task-complete')
    saveTasks()
  })

  const removeBtn = document.createElement('button')
  removeBtn.classList.add('removeBtn')
  removeBtn.textContent = 'Delete'
  removeBtn.addEventListener('click', () => {
    task.remove()
    saveTasks()
  })

  task.append(checkComplete, text, removeBtn)
  list.appendChild(task)

  saveTasks()
}

export function addTask() {
  const taskText = input.value.trim()

  if(!taskText) {
    return
  }

  createTask(taskText)

  input.value = ''
}