const bgImageEl = document.querySelector('.hero__bg') // Используем querySelector для классов

window.addEventListener('scroll', () => {
	updateImage()
})

function updateImage() {
	const opacity = 1 - window.pageYOffset / 900
	bgImageEl.style.opacity = opacity

  
}
