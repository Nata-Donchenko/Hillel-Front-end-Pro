export const body = document.querySelector('body')

export const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

export const title = document.createElement('h1')
title.textContent = 'My tasks'

export const inputDiv = document.createElement('div')
inputDiv.classList.add('input-wrapper')

export const list = document.createElement('ul')
container.append(title, inputDiv, list)

export const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Enter a task'

export const addBtn = document.createElement('button')
addBtn.classList.add('addBtn')
addBtn.textContent = 'Add'


inputDiv.append(input, addBtn)