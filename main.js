// 14.1 Пишемо свій слайдер зображень, який повинен:

// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const sliderLine = document.querySelector('.slider_line')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.slider_dot')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')

let slideIndex = 0
const slideWidth = 800

moveSlider()

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index
    moveSlider()
  })
})

function nextSlide() {
  slideIndex++

  if (slideIndex >= slides.length) {
    slideIndex = slides.length - 1
  }

  moveSlider()
}

function prevSlide() {
  slideIndex--

  if (slideIndex < 0) {
    slideIndex = 0
  }

  moveSlider()
}

function moveSlider() {
  sliderLine.style.transform = `translateX(-${slideIndex * slideWidth}px)`

  updateDots()

  updateButtons()
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active-dot'))
  dots[slideIndex].classList.add('active-dot')
}

function updateButtons() {
  btnPrev.classList.toggle('btn-no_active', slideIndex === 0)
  btnNext.classList.toggle('btn-no_active', slideIndex === slides.length - 1)
}