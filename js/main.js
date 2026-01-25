// 19.1 За допомогою запиту вивести виджет погоди.
// Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.


import { showWether } from './modules/widget.js'
import { searchBtn, searchInput } from './modules/dom.js'

searchBtn.addEventListener('click', () => {
  showWether(searchInput.value)
  searchInput.value = ''
})