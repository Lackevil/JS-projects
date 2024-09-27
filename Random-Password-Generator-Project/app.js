const generateBtn = document.querySelector('.password-generator__submit')
const generateResult = document.querySelector('.password-generator__password')
const copyBtn = document.querySelector('.password-generator__copy')

const characters = Array.from(Array(95), (val,i) => String.fromCharCode(i+32))

function generatePassword() {
  const passwordArray = []

  for (let i = 0; i < 10; i++) {
    const rndIndex = Math.round(Math.random() * 95)

    passwordArray.push(characters[rndIndex])
  }

  generateResult.style.color = '#000'
  generateResult.textContent = passwordArray.join('')
}

function copyToClipBoard() {
  const passWordText = generateResult.textContent

  navigator.clipboard.writeText(passWordText)

  alert('Password copied')
}