const btns = document.querySelectorAll('.btns > button')
const field = document.querySelector('.calculator__field')

btns.forEach(btn => {
  btn.addEventListener('click', () => clickedBtn(btn))
})

let results = ''

function clickedBtn(btn) {
  const btnText = btn.innerText

  if (btnText !== 'C' && btnText !== '=') {
    addItemToResult(btnText)
  } else if (btnText === 'C') {
    field.value = ''
    results = ''
  } else if (btnText === '=') {
    calculate(results)
  }
}

function addItemToResult(item) {
  results += item
  field.value = results
}
function calculate(item) {
  field.value = (eval(item))
}