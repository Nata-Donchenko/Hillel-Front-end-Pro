export function createHtmlElement(tag, className = '', text = '') {
  const element = document.createElement(tag)
  
  if(className) {
    element.classList.add(className)
  }

  if(text) {
    element.textContent = text
  }

  return element
}
 
export function setZeroIfMissing(cheks) {
  cheks.forEach(({value, element, suffix = ''}) => {
    if(value === undefined || value === null) {
      element.textContent = '0' + suffix
    }
  })
}

export function updateIcon(parentBlock, items, interval) {
  const img = parentBlock.querySelector('img')
  const text = parentBlock.querySelector('p')

  let currentIndex = 0

  function showNext() {
    const current = items[currentIndex]
    img.src = current.icon
    img.alt = current.description
    text.textContent = current.description

    currentIndex = (currentIndex + 1) % items.length
  }

  showNext()
  return setInterval(showNext, interval)
}