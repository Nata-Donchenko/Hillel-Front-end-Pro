// 24.1 Сгенерувати свій перший реакт-додаток. Зробити інтерфейс для SWAPI. Увага, тільки інтерфейс, без логіки запитів та подій.

// Використати bootstrap через CDN
// За потреби свого набору стилів, додати їх через CSS файл


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
