import dayjs from "dayjs";
import { dataList, templateTodoItem } from "./todoList.js";
import { refs } from "./dom.js";
export function onSubmit(event) {
  event.preventDefault();
  var form = event.currentTarget;
  var input = form.elements.todoInput;
  var dateInput = form.elements.deadlineDate;
  var timeInput = form.elements.deadlineTime;
  var deadline = dayjs("".concat(dateInput.value, " ").concat(timeInput.value)).toISOString();
  var value = input.value;
  var currentTodo = dataList.addTodo(value, deadline);
  var markupTodoItem = templateTodoItem(currentTodo);
  refs.list.insertAdjacentHTML('beforeend', markupTodoItem);
  localStorage.setItem('list', JSON.stringify(dataList.todoList));
  form.reset();
  input.focus();
}