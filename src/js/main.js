// ДЗ 22.1. Білд через Webpack
// На основі одного з попередніх завдань зробити білд через Webpack. Що має робити білд:
// Оптимізація, конкатинація, мініфікація JS
// Компіляція SCSS в CSS. Мініфікація CSS
// Вотчер
// За бажанням:

// Dev-server
// image-minimizer-webpack-plugin

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.scss'

import { refs } from '@modules/dom.js'
import { onSubmit } from '@modules/todoForm.js'
import { onClickByList, addInitList } from '@modules/todoList.js'
import { updateTimers } from '@modules/deadline.js'

refs.todoForm.addEventListener('submit', onSubmit)
refs.list.addEventListener('click', onClickByList)

addInitList()
setInterval(updateTimers, 1000)
updateTimers()