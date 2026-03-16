// # Домашнє завдання 2. PostCatalog
// Реалізуйте компонент `<PostCatalog />`, який відображає статті, отримані із зовнішнього сервера.
//
// ## Умова
// Список постів можна отримати, зробивши запит на сервер:
//   https://github.com/junjun-it-courses/react-hw/blob/master/task-14/script.js
//     Структура, яку ви повинні отримати в результаті:
//   https://github.com/junjun-it-courses/react-hw/blob/master/task-14/layout.html
//     Кожен наступний `li` — це окремий пост.
//
// ## Підказка
//   `fetch`:
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
