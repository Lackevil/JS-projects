const textArea = document.querySelector('.char-counter__textarea')
const totalChars = document.querySelector('#total')
const remainingChars = document.querySelector('#remaining')

let maxChars = 50
let remainingCount = maxChars

function countChar() {
  let chars = textArea.value.split('')
  let charsCount = chars.length

  remainingCount = maxChars - charsCount
  
  totalChars.textContent = chars.length
  remainingChars.textContent = remainingCount

}