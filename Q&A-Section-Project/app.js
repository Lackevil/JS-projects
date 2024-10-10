const btns = document.querySelectorAll('.item-accord__btn')

btns.forEach(btn => {
  btn.addEventListener('click', () => accordAction(btn))
})

function accordAction(btn) {
  const parent = btn.parentElement.parentElement
  
  parent.classList.toggle('active')
}
