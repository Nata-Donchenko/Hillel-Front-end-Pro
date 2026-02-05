import deleteBtn from '../../images/delete-btn.png'
import { getTime } from "./deadline.js"
import { refs } from "./dom.js"
import { modalState, deleteModal } from './modal.js'

export const dataList = {
  todoList: [],

  initTodo(list) {
    this.todoList = list
  },

  addTodo(task, deadline) {
    const newTodo = {
      id: Date.now().toString(),
      task,
      deadline,
      isCompleted: false,
    }

    this.todoList = [...this.todoList, newTodo]

    return newTodo
  },

  changeStatus(id) {
    this.todoList = this.todoList.map(todo => {

      if(todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted}
      }

      return todo
    })
  },

  deleteTodo(id) {
    this.todoList = this.todoList.filter(todo => todo.id !== id)
  }
}

export function onClickByList({ target }) {

  if (target.dataset.action === 'removeTodo') {
    modalState.todoIdToDelete = target.dataset.id
    deleteModal.show()
  }
  
  if(target.dataset.action === 'changeStatus') {
    dataList.changeStatus(target.dataset.id)
    target.classList.toggle('todoTaskDone')

    const parentLi = target.closest('.todoItem')
    const deadlineEl = parentLi.querySelector('.todoDeadline') 

    if(deadlineEl) {
      deadlineEl.classList.toggle('hidden')
    }

    localStorage.setItem('list', JSON.stringify(dataList.todoList))
  }
}

export function addInitList() {
  let listTodo = localStorage.getItem('list')

  if(!listTodo) {
    return
  }

  listTodo = JSON.parse(listTodo)

  dataList.initTodo(listTodo)

  const markup = listTodo.map(todo => templateTodoItem(todo)).join('')
  
  refs.list.innerHTML = markup
}

export function templateTodoItem ({ task, id, isCompleted, deadline }) {
  return `
    <li class="todoItem">
      <p 
        class="todoItemText ${isCompleted ? 'todoTaskDone': ''}" 
        data-action = "changeStatus"
        data-id = "${id}"
      >
       ${task}
      </p>
      <p
        class="todoDeadline ${isCompleted ? 'hidden' : ''}"
        data-deadline = "${deadline}"
        data-id = "${id}"
      >
        ${getTime(deadline)}
      </p>
      <button 
        type="button" 
        class="todoItemBtnDelete"
        data-action = "removeTodo"
        data-id = "${id}"
      >
        <img src="${deleteBtn}" alt="delete btn">
      </button>
    </li>
  `
}