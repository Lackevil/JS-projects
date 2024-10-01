const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const colorItems = document.querySelectorAll('.item-colors')

for (let item of colorItems) {
  const rndColor = rndColorFunc()

  item.style.background = rndColor
  item.querySelector('.item-colors__title').textContent = rndColor
}

function rndColorFunc() {
  const rndColor = ['#']
  
  for (let i = 0; i < 6; i++) {
    rndColor.push(hexChars[Math.floor(Math.random() * 16)])
  }

  return rndColor.join('')
}