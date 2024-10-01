const header = document.querySelector('.header')
const info = document.querySelector('.info')

window.addEventListener('scroll', () => {
  if (window.scrollY > info.offsetTop - header.offsetHeight - 50) {
    header.classList.add('scrolled-header')
  } else {
    header.classList.remove('scrolled-header')
  }
})
