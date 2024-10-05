const burger = document.querySelector('#burger')
const header = document.querySelector('header')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('scroll-lock')
})