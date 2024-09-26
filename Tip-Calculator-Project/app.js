const amount = document.querySelector('#amount')
const tip = document.querySelector('#tip')
// const submit = document.querySelector('#submit')

const total = document.querySelector('#total')

function calculate() {
  let amountValue = +amount.value
  let tipAmount = +tip.value

  total.textContent = (amountValue + (amountValue / 100) * tipAmount).toFixed(2)
}