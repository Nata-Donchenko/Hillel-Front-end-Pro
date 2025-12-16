// ДЗ 13.1. Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:

// Поля:

// Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.

// Під час помилки показувати її під полем.

const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const phoneInput = document.querySelector('#phone')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')

nameInput.addEventListener('change', () => {
  nameInput.setCustomValidity('')
})

phoneInput.addEventListener('change', () => {
  phoneInput.setCustomValidity('')
})

emailInput.addEventListener('change', () => {
  emailInput.setCustomValidity('')
})

messageInput.addEventListener('change', () => {
  messageInput.setCustomValidity('')
})

form.addEventListener('submit', (e) => {

  e.preventDefault()
  let isValid = true

  const userName = nameInput.value.trim()

  if (userName.length < 2) {
    nameInput.setCustomValidity("Enter your name. The name must be at least two characters long")
    isValid = false
  } 

  const userMessage = messageInput.value.trim()

  if (userMessage === '' || userMessage.length < 5) {
    messageInput.setCustomValidity("The message must be at least 5 characters long")
    isValid = false
  } 

  const userPhone = phoneInput.value.trim()

  if(userPhone === '' || !userPhone.startsWith('+380') || userPhone.length !==13) {
    phoneInput.setCustomValidity('The phone number must start with +380 and contain 12 digits')
    isValid = false
  } 

  const userEmail = emailInput.value.trim()

  if(userEmail === '' || !userEmail.includes('@') || !userEmail.includes('.') || userEmail.startsWith('@')) {
    emailInput.setCustomValidity("Enter a valid email")
    isValid = false
  } 

  if (!isValid) {
    form.reportValidity()
    return
  }

  const data = Object.fromEntries(new FormData(e.target).entries())
  console.log('Form data:', data)
})