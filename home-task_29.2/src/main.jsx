// # Домашнє завдання 3. MarkdownEditor
// Реалізуйте компонент `<MarkdownEditor />`, який є React-обгорткою для плагіна `@toast-ui/editor`.
// ## Умова
// Цей плагін дозволяє вбудувати на сторінку Markdown-редактор.
//   Використання: `script.js`
// Компонент приймає функцію через властивість `onContentChange`, яка викликається при кожній зміні в редакторі.
//   Функція приймає поточний вміст редактора.
//   Приклад використання можна побачити у файлі:
//   https://github.com/junjun-it-courses/react-hw/blob/master/task-15/index.jsx
//     Приклад роботи редактора можна переглянути на сторінці документації.
// ## Важливо
// Обов’язково реалізуйте все на функціональних компонентах.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
