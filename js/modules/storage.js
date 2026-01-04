import { createTask } from './task.js'

export function saveTasks() {
  const tasks = []

  const li = document.querySelectorAll('li')
  li.forEach((task) => {
    const text = task.querySelector('span').textContent
    const completed = task.querySelector('input[type="checkbox"]').checked
    tasks.push({text, completed})
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  tasks.forEach((task) => createTask(task.text, task.completed))
}