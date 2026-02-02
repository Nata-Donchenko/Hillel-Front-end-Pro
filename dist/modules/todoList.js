function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import { getTime } from "./deadline.js";
import { refs } from "./dom.js";
import { modalState, deleteModal } from './modal.js';
export var dataList = {
  todoList: [],
  initTodo: function initTodo(list) {
    this.todoList = list;
  },
  addTodo: function addTodo(task, deadline) {
    var newTodo = {
      id: Date.now().toString(),
      task: task,
      deadline: deadline,
      isCompleted: false
    };
    this.todoList = [].concat(_toConsumableArray(this.todoList), [newTodo]);
    return newTodo;
  },
  changeStatus: function changeStatus(id) {
    this.todoList = this.todoList.map(function (todo) {
      if (todo.id === id) {
        return _objectSpread(_objectSpread({}, todo), {}, {
          isCompleted: !todo.isCompleted
        });
      }
      return todo;
    });
  },
  deleteTodo: function deleteTodo(id) {
    this.todoList = this.todoList.filter(function (todo) {
      return todo.id !== id;
    });
  }
};
export function onClickByList(_ref) {
  var target = _ref.target;
  if (target.dataset.action === 'removeTodo') {
    modalState.todoIdToDelete = target.dataset.id;
    deleteModal.show();
  }
  if (target.dataset.action === 'changeStatus') {
    dataList.changeStatus(target.dataset.id);
    target.classList.toggle('todoTaskDone');
    var parentLi = target.closest('.todoItem');
    var deadlineEl = parentLi.querySelector('.todoDeadline');
    if (deadlineEl) {
      deadlineEl.classList.toggle('hidden');
    }
    localStorage.setItem('list', JSON.stringify(dataList.todoList));
  }
}
export function addInitList() {
  var listTodo = localStorage.getItem('list');
  if (!listTodo) {
    return;
  }
  listTodo = JSON.parse(listTodo);
  dataList.initTodo(listTodo);
  var markup = listTodo.map(function (todo) {
    return templateTodoItem(todo);
  }).join('');
  refs.list.innerHTML = markup;
}
export function templateTodoItem(_ref2) {
  var task = _ref2.task,
    id = _ref2.id,
    isCompleted = _ref2.isCompleted,
    deadline = _ref2.deadline;
  return "\n    <li class=\"todoItem\">\n      <p \n        class=\"todoItemText ".concat(isCompleted ? 'todoTaskDone' : '', "\" \n        data-action = \"changeStatus\"\n        data-id = \"").concat(id, "\"\n      >\n       ").concat(task, "\n      </p>\n      <p\n        class=\"todoDeadline ").concat(isCompleted ? 'hidden' : '', "\"\n        data-deadline = \"").concat(deadline, "\"\n        data-id = \"").concat(id, "\"\n      >\n        ").concat(getTime(deadline), "\n      </p>\n      <button \n        type=\"button\" \n        class=\"todoItemBtnDelete\"\n        data-action = \"removeTodo\"\n        data-id = \"").concat(id, "\"\n      >\n        <img src=\"./images/delete-btn.png\" alt=\"delete btn\">\n      </button>\n    </li>\n  ");
}