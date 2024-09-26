const weightInPounds = document.getElementById('weightInPounds')
const convertResult = document.getElementById('convertResult')
const converterError = document.querySelector('.converter__error')

const regex = /^[0-9]*$/;

function convertWeight() {
  let weightInPoundsValue = weightInPounds.value

  if (regex.test(weightInPoundsValue)) {
    convertResult.textContent = Math.round(weightInPoundsValue / 2.20462)
    converterError.classList.add('hidden')
  } else {
    converterError.classList.remove('hidden')
  }
}