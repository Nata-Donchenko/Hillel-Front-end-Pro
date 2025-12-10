// ДЗ 12.1. Переход на сторінку
// На сторінці є дві кнопки. 
// При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт 
// (за раніше введеним посиланням).

const body = document.querySelector('body')

const promptBtn = document.createElement('button')
promptBtn.textContent = 'prompt'
promptBtn.classList.add('btn')

const linkBtn = document.createElement('button')
linkBtn.textContent = 'link'
linkBtn.classList.add('btn')

body.appendChild(promptBtn)
body.appendChild(linkBtn)

let usersUrl = ''

function getUrl () {
  const url = prompt('Enter URL', 'http://')

  if (!url || url === 'http://' || url=== '') {
    alert('Try again')
    return
  }

  usersUrl = url
}

function changeUrl () {
  if (!usersUrl) {
    alert('At first click button "prompt"')
  }
  
  window.location.href = usersUrl
}

promptBtn.addEventListener('click', getUrl)
linkBtn.addEventListener('click', changeUrl)