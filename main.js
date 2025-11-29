// 11.1 Вивести таблицю Піфагора (10×10), 
// таблиця повинна бути створена динамічно

const body = document.querySelector('body')
const wrapper = document.createElement('div')
body.appendChild(wrapper)

const wrapperTags = ['p', 'h1', 'table']
wrapperTags.forEach((tag) => {
  const newTag = document.createElement(tag)
  wrapper.appendChild(newTag)
})

const taskNumber = document.querySelector('p')
taskNumber.textContent = 'Home task 11.1'

const taskName = document.querySelector('h1')
taskName.textContent = "Table of Pythagoras"
taskName.style.textAlign = 'center'

const table = document.createElement('table')
table.style.cssText = `
  background: #03bfaf80;
  margin: 0 auto;
  text-aline: center
`
wrapper.appendChild(table)

for (let i = 1; i <= 10; i++) {
  const line = document.createElement('tr')
  table.appendChild(line)

  if (i === 1) {
    line.style.color = '#38aea5ff'
    line.style.fontWeight = 'bold'
    line.style.background = 'black'
  }

  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('td')
    cell.style.cssText = `
      padding: 10px; 
      font-size: 20px; 
      text-align: center;
      border: 1px solid black
    `
    cell.textContent = i * j
    line.appendChild(cell)
    
    if (j === 1) {
      cell.style.color = '#38aea5ff'
      cell.style.fontWeight = 'bold'
      cell.style.background = 'black'
    } 
    
    if (i === j && i != 1) {
      cell.style.fontWeight = 'bold'
      cell.style.background = '#21787188'
    }
  }
}