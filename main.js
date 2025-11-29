// HomeTask 11.3. Отримання випадкового зображення
// Покласти в папку будь-які зображення 
// 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)

const body = document.querySelector('body')

const container = document.createElement('div')
container.classList.add('container')

body.appendChild(container)

const button = document.createElement('button')
button.classList.add('btn')
button.textContent = 'Click for a random image'
container.appendChild(button)

const image = document.createElement('img')
container.appendChild(image)

const images = []
for (let i = 1; i <= 9; i++) {
  images.push(`images/${i}.jpg`)
}

function getImage () {
  let randomNumber = Math.floor(Math.random() * images.length)
  image.src = images[randomNumber]
  image.classList.add('img')
}

button.addEventListener('click', getImage)