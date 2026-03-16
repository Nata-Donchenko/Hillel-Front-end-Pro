// # Домашнє завдання 1. Лог подій з кнопками + і -
// Реалізуйте компонент, який складається з двох кнопок і логу подій.
// ## Умова
// Лог — це список значень, кожне з яких з’являється після натискання однієї з двох кнопок. У
// низу знаходяться старіші події, зверху — новіші.
//   Ліва кнопка `+` додає в лог рядок із новим значенням, що дорівнює:
//   `значення найновішого наявного запису логу + 1`
// Права кнопка `-` додає в лог рядок із новим значенням, що дорівнює:
//   `значення найновішого наявного запису логу - 1`
// При кліку на запис у лозі він видаляється.
// ## Матеріали
// Початковий HTML:
//   https://github.com/junjun-it-courses/react-hw/blob/master/task-10.1/layout.html
//     Приклад після натискання послідовності `+`, `+`, `-`, `+`:
// https://github.com/junjun-it-courses/react-hw/blob/master/task-10.1/layout2.html
//   ## Важливо
// Кожне натискання кнопки додає в лог новий рядок зверху.


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
