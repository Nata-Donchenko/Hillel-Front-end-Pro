// 20.1. Переробити ToDo-list з використанням Jquery
// За допомогою Bootstrap створити модальне вікно до TODO list, 
// яке по кліку на завдання буде показувати вікно з його текстом. 

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import { refs } from './modules/dom.js'
import { onSubmit } from './modules/todoForm.js'
import { onClickByList, addInitList } from './modules/todoList.js'
import { updateTimers } from './modules/deadline.js'

refs.todoForm.addEventListener('submit', onSubmit)
refs.list.addEventListener('click', onClickByList)

addInitList()
setInterval(updateTimers, 1000)
updateTimers()