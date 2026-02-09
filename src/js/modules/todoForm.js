
import dayjs from "dayjs"
import { dataList, templateTodoItem } from "@modules/todoList.js"
import { refs } from "@modules/dom.js"

export function onSubmit(event) {
  event.preventDefault()

  const form = event.currentTarget
  const input = form.elements.todoInput
  const dateInput = form.elements.deadlineDate
  const timeInput = form.elements.deadlineTime

  const deadline = dayjs(`${dateInput.value} ${timeInput.value}`).toISOString()

  const { value } = input

  const currentTodo = dataList.addTodo(value, deadline)

  const markupTodoItem = templateTodoItem(currentTodo)
  
  refs.list.insertAdjacentHTML('beforeend', markupTodoItem)
  localStorage.setItem('list', JSON.stringify(dataList.todoList))

  form.reset()
  input.focus()
}