import { Modal } from 'bootstrap';
import { refs } from './dom.js';
import { dataList } from './todoList.js';
export var deleteModal = new Modal(refs.modal);
export var modalState = {
  todoIdToDelete: null
};
confirmDeleteBtn.addEventListener('click', function () {
  var _refs$list$querySelec;
  if (!modalState.todoIdToDelete) {
    return;
  }
  dataList.deleteTodo(modalState.todoIdToDelete);
  var item = (_refs$list$querySelec = refs.list.querySelector(".todoItem button[data-id=\"".concat(modalState.todoIdToDelete, "\"]"))) === null || _refs$list$querySelec === void 0 ? void 0 : _refs$list$querySelec.closest('.todoItem');
  if (item) {
    item.remove();
  }
  localStorage.setItem('list', JSON.stringify(dataList.todoList));
  deleteModal.hide();
  modalState.todoIdToDelete = null;
});