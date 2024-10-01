const userScoreEl = document.querySelector('#score')
const question = document.querySelector('.app__question')

const firstNumEl = document.querySelector('#firstNum')
const secondNumEl = document.querySelector('#secondNum')

const userInputEl = document.querySelector('.app__input')
const submitBtnEl = document.querySelector('.app__submit')

let userScore = 0

let firstNum = 0
let secondNum = 0

generateNewNumbers()

function generateNewNumbers() {
  firstNum = Math.floor(Math.random() * 10) + 1
  secondNum = Math.floor(Math.random() * 10) + 1

  firstNumEl.textContent = firstNum
  secondNumEl.textContent = secondNum
}

function proccess() {
  let userNum = Number(userInputEl.value)

  
  if (userNum === (firstNum * secondNum)) {
    userScore++
    userScoreEl.textContent = userScore
  } else {
    userScore--
    userScoreEl.textContent = userScore
  }
  
  generateNewNumbers()
  userInputEl.value = ''
}