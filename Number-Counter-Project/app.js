const digitEl = document.querySelector('#digit')

let digit = 0

const decriment = document.querySelector('#decriment')
const increment = document.querySelector('#increment')
const reset = document.querySelector('#reset')

decriment.addEventListener('click', () => {
  digit--
  updateDigitEl()
})

increment.addEventListener('click', () => {
  digit++
  updateDigitEl()
})

reset.addEventListener('click', () => {
  digit = 0
  updateDigitEl()
})

function updateDigitEl() {
  if (digit < 0) {
    digitEl.style.color = 'rgb(220, 53, 69)'
  } else if (digit > 0) {
    digitEl.style.color = 'green'
  } else {
    digitEl.style.color = '#000'
  }


  digitEl.textContent = digit
}