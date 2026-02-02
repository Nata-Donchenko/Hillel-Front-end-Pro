import { Modal } from 'bootstrap'
import { refs } from './dom.js'
import { dataList } from './todoList.js'

export const deleteModal = new Modal(refs.modal)

export const modalState = {
  todoIdToDelete: null
}

confirmDeleteBtn.addEventListener('click', () => {
  
  if(!modalState.todoIdToDelete) {
    return
  }

  dataList.deleteTodo(modalState.todoIdToDelete)

  const item = refs.list.querySelector(`.todoItem button[data-id="${modalState.todoIdToDelete}"]`)?.closest('.todoItem')
  
  if(item) {
    item.remove()
  }

  localStorage.setItem('list', JSON.stringify(dataList.todoList))

  deleteModal.hide()

  modalState.todoIdToDelete = null
})