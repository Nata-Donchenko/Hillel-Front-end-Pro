// 25.1. На сторінці відображається список смайликів та лічильник кліків по кожному.

// Нижче є кнопка “Show Results” яка виводить смайл, що переміг, на підставі кількості голосів.
// Дані голосування повинні зберігатися у localStorage
// Повинна бути кнопка "Очистити результати". Яка буде видаляти

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
