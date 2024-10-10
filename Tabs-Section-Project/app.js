const tab1 = document.getElementById('tab1')
const tab2 = document.getElementById('tab2')
const tab3 = document.getElementById('tab3')

const tabs = document.querySelectorAll('.buttons-item__item')
const texts = document.querySelectorAll('.tabs__text')

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => changeTab(e))
})

function changeTab(e) {
  const numberOfTab = Number(e.target.dataset.tab) - 1

  for (let i = 0; i < texts.length; i++) {
    if (i === numberOfTab) {
      texts[i].style.display = 'block'
    } else {
      texts[i].style.display = 'none'
    }
  }

  tabs.forEach(tab => {
    tab.style.background = ''
  })

  e.target.style.background = 'pink'
}