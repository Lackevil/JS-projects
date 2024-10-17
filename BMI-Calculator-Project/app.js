const submit = document.querySelector('.form-calculator__submit')

const heightEl = document.querySelector('#height')
const weightEl = document.querySelector('#weight')

const result = document.querySelector('#result')
const conditionEl = document.querySelector('#condition')

submit.addEventListener('click', (event) => {
  event.preventDefault()
  calculateBmi()
})

function calculateBmi() {
  const height = Number(heightEl.value) / 100
  const weight = Number(weightEl.value)

  const bmi = weight / (height * height)

  result.value = bmi.toFixed(2)
  let condition = ''

  if (bmi <= 18.4) {
    condition = 'Underweight'
  } else if (bmi <= 24.9) {
    condition = 'Normal'
  } else if (bmi <= 39.9) {
    condition = 'Overweight'
  } else if (bmi >= 40) {
    condition = 'Obese'
  }

  conditionEl.textContent = condition
}