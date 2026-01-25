import {createHtmlElement} from './utils.js'

export const container = createHtmlElement('div', 'container')
document.body.appendChild(container)

export const searchWrapper = createHtmlElement('div', 'search_wrapper')
export const searchInput = createHtmlElement('input', 'search_input')
searchInput.placeholder = 'Enter a city'
searchInput.type = 'text'
export const searchBtn = createHtmlElement('button', 'search_btn', 'show weather')

searchWrapper.append(searchInput, searchBtn)

export const infoText = createHtmlElement('p', 'info-text', 'Weather widget')

container.append(searchWrapper, infoText)