// ДЗ 12.2. Використання подій
// Створіть HTML-сторінку з декількома кнопками. 
// Ваше завдання - створити обробник подій для батьківського 
// елементу, який відслідковуватиме кліки на всіх кнопках.

// Покроковий план:

// 1. Створіть HTML-елементи: батьківський контейнер 
// з декількома вкладеними кнопками.

// 2. Додайте обробник подій до батьківського контейнера, 
// який відслідковуватиме кліки.

// 3. Після кліку на будь-якій кнопці, 
// виведіть повідомлення про те, яка саме кнопка була клікнута.

const body = document.querySelector('body')

const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

for (let i = 1; i <=3; i++) {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.textContent = `Button ${i}`
  container.appendChild(btn)
}

function getBtnNum (event) {
  if (event.target.tagName === 'BUTTON') {
    alert(`Clicked ${event.target.textContent}`)
  }
}

container.addEventListener('click', getBtnNum)