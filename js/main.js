// 15.1 Доробити TODO лист, в якому буде можливість:

// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.


import { addBtn } from './modules/dom.js'
import { addTask } from './modules/task.js'
import { loadTasks } from './modules/storage.js'

addBtn.addEventListener('click', addTask)

loadTasks()