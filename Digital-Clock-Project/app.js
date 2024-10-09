const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')


function updateClock() {
  const date = new Date()
  
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ]
  
  hoursEl.textContent = hours
  minutesEl.textContent = minutes
  secondsEl.textContent = seconds

  setTimeout(() => {
    updateClock()
  }, 1000)
}

updateClock()