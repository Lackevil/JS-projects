const monthEl = document.querySelector('#month')
const dayEl = document.querySelector('#day')
const dateEl = document.querySelector('#date')
const yearEl = document.querySelector('#year')

const getDate = new Date()

const [month, day, date, year] = [
  getDate.getMonth() + 1,  // месяц
  getDate.getDay(),        // день недели
  getDate.getDate(),       // число
  getDate.getFullYear()    // год
]

function rightMonth(mon) {
  switch (mon) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'        // исправлено на 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
    default:
      return 'Invalid month'
  }
}

function rightDay(d) {
  switch (d) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return 'Invalid day'
  }
}

monthEl.textContent = rightMonth(month)
dayEl.textContent = rightDay(day)  // преобразование дня недели в текст
dateEl.textContent = date
yearEl.textContent = year
