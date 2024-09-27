const userScore = document.querySelector('#userScore')
const computerScore = document.querySelector('#computerScore')
const gameResultPrint = document.querySelector('.game__result')

const moves = ['rock', 'paper', 'scissors']

let user = 0
let computer = 0

function game(userMove) {
  let rndComputerMove = moves[Math.floor(Math.random() * moves.length)]

  if (userMove === 'rock' && rndComputerMove === 'rock') {
    tie()
  } if (userMove === 'rock' && rndComputerMove === 'paper') {
    computerWin()
  } if (userMove === 'rock' && rndComputerMove === 'scissors') {
    userWin()
  } if (userMove === 'paper' && rndComputerMove === 'rock') {
    userWin()
  } if (userMove === 'paper' && rndComputerMove === 'paper') {
    tie()
  } if (userMove === 'paper' && rndComputerMove === 'scissors') {
    computerWin()
  }  if (userMove === 'scissors' && rndComputerMove === 'rock') {
    computerWin()
  } if (userMove === 'scissors' && rndComputerMove === 'paper') {
    userWin()
  } if (userMove === 'scissors' && rndComputerMove === 'scissors') {
    tie()
  } 
}

function tie() {
  gameResultPrint.textContent = "It's a tie!"
}

function computerWin() {
  gameResultPrint.textContent = "Computer win!"
  computer++
  computerScore.textContent = computer
  
}

function userWin() {
  gameResultPrint.textContent = 'You win!'
  user++
  userScore.textContent = user
}